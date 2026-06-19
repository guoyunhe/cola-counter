import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Counter({ value, onIncrement, onDecrement }: CounterProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={onDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5C9CE6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 36,
  },
  valueContainer: {
    minWidth: 80,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    alignItems: 'center',
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
  },
});