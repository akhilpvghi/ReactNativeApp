import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';

export default function App() {

  return (
    <View style={styles.container}>
      <Home/>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// backgroundColor: '#fff',
