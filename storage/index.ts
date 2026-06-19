import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DailyCount {
  date: string;
  countCoke: number;
  countZero: number;
}

const STORAGE_KEY = 'cola_counter_daily';

export async function getDailyCount(date: string): Promise<DailyCount> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) {
      return { date, countCoke: 0, countZero: 0 };
    }
    const records: Record<string, DailyCount> = JSON.parse(data);
    return records[date] || { date, countCoke: 0, countZero: 0 };
  } catch {
    return { date, countCoke: 0, countZero: 0 };
  }
}

export async function saveDailyCount(date: string, countCoke: number, countZero: number): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    const records: Record<string, DailyCount> = data ? JSON.parse(data) : {};
    records[date] = { date, countCoke, countZero };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {}
}

export async function getAllDailyCounts(): Promise<DailyCount[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (!data) {
      return [];
    }
    const records: Record<string, DailyCount> = JSON.parse(data);
    return Object.values(records).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function clearAllData(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch {}
}
