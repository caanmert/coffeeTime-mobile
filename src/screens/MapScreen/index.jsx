import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';

const MapScreen = () => (

  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>MapScreen</Text>

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
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
  },
});

export default MapScreen;
