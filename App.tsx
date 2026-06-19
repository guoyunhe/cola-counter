import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { CocaColaSticker, CocaColaZeroSticker } from './icons';
import { Counter } from './components';
import { getDailyCount, saveDailyCount } from './storage';

export default function App() {
  const [countCoke, setCountCoke] = useState(0);
  const [countZero, setCountZero] = useState(0);
  
  const today = new Date();
  const dateKey = today.toISOString().split('T')[0];
  const dateString = today.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    async function loadData() {
      const data = await getDailyCount(dateKey);
      setCountCoke(data.countCoke);
      setCountZero(data.countZero);
    }
    loadData();
  }, [dateKey]);

  useEffect(() => {
    saveDailyCount(dateKey, countCoke, countZero);
  }, [dateKey, countCoke, countZero]);

  const handleIncrementCoke = () => {
    setCountCoke(prev => prev + 1);
  };

  const handleDecrementCoke = () => {
    setCountCoke(prev => Math.max(0, prev - 1));
  };

  const handleIncrementZero = () => {
    setCountZero(prev => prev + 1);
  };

  const handleDecrementZero = () => {
    setCountZero(prev => Math.max(0, prev - 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{dateString}</Text>
      
      <View style={styles.row}>
        <View style={styles.stickerContainer}>
          <CocaColaSticker size={120} />
          <Text style={styles.label}>Sugar</Text>
        </View>
        <Counter 
          value={countCoke} 
          onIncrement={handleIncrementCoke} 
          onDecrement={handleDecrementCoke} 
        />
      </View>
      <View style={styles.row}>
        <View style={styles.stickerContainer}>
          <CocaColaZeroSticker size={120} />
          <Text style={styles.label}>Zero Sugar</Text>
        </View>
        <Counter 
          value={countZero} 
          onIncrement={handleIncrementZero} 
          onDecrement={handleDecrementZero} 
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
  },
  stickerContainer: {
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
});