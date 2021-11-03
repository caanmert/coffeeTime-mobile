import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const SplashScreen = () => (

  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>CoffeeTime</Text>
  </SafeAreaView>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default SplashScreen;
