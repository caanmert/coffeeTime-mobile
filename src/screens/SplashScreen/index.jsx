import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Text, SafeAreaView, StyleSheet, ActivityIndicator, AppState,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import locationPermission from '../../permissions/locationPermission';

const SplashScreen = ({ isGranted }) => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', async (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        const res = await locationPermission();
        if (res) { isGranted(true); }
      }
      appState.current = nextAppState;
    });
    return () => {
      subscription.remove();
    };
  }, []);

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CoffeeTime</Text>
      <Icon name="coffeescript" size={50} color="black" style={styles.icon} />
      <ActivityIndicator size="large" animating color="black" />
    </SafeAreaView>

  );
};

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

SplashScreen.defaultProps = {
  isGranted: () => {},
};
SplashScreen.propTypes = {
  isGranted: PropTypes.func,
};

export default SplashScreen;
