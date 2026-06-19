import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CocaColaSticker, CocaColaZeroSticker } from './icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.stickerRow}>
        <CocaColaSticker size={120} />
        <CocaColaZeroSticker size={120} />
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
  },
  stickerRow: {
    flexDirection: 'row',
    gap: 20,
  },
});