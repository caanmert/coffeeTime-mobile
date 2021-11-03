import React from 'react';
import {
  Text, SafeAreaView, StyleSheet, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const SplashScreen = () => (

  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>CoffeeTime</Text>
    <Icon name="coffeescript" size={50} color="black" style={styles.icon} />
    <ActivityIndicator size="large" animating color="black" />
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
  icon: {
    marginBottom: 50,
  },
});

export default SplashScreen;
