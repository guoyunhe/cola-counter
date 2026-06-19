import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { CocaColaSticker, CocaColaZeroSticker } from './icons';
import { Counter } from './components';

export default function App() {
  const [countCoke, setCountCoke] = useState(0);
  const [countZero, setCountZero] = useState(0);
  
  const today = new Date();
  const dateString = today.toLocaleDateString(undefined, {
    month: 'long',
    day: 'numeric',
  });

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
          onIncrement={() => setCountCoke(countCoke + 1)} 
          onDecrement={() => setCountCoke(Math.max(0, countCoke - 1))} 
        />
      </View>
      <View style={styles.row}>
        <View style={styles.stickerContainer}>
          <CocaColaZeroSticker size={120} />
          <Text style={styles.label}>Zero Sugar</Text>
        </View>
        <Counter 
          value={countZero} 
          onIncrement={() => setCountZero(countZero + 1)} 
          onDecrement={() => setCountZero(Math.max(0, countZero - 1))} 
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