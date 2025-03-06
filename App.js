import { StyleSheet, View } from 'react-native';
import ContadorDeLikes from './src/components/ContadorDeLikes';
import CalculoIMC from './src/components/CalculoMC';

export default function App() {
  
  return (
    <View  style={styles.container}>
      <ContadorDeLikes/>
      <CalculoIMC/>
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
});
