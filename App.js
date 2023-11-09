import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box/Box';
import Buttons from './Components/Buttons/Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora React</Text>
      <Box />
      <Buttons />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a465c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 30,
    height: 100,
    color: 'white'
  },
});
