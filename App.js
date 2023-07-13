import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import index from './src/index.js';


export default function App() {
  return ( 
    <index />
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
