import React from 'react';
import {
  StyleSheet, Text, ActivityIndicator, SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import PropTypes from 'prop-types';

const Logo = ({ spinner, spinnerColor, message }) => (
  <SafeAreaView style={styles.container}>
    <Icon name="coffeescript" size={50} color="black" style={styles.icon} />
    <ActivityIndicator style={styles.spinner} size="large" animating={spinner} color="black" />
    <Text style={styles.message}>{message}</Text>
  </SafeAreaView>

);

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 100,
  },
  message: {
    color: 'black',
    fontSize: 10,
    // fontWeight: 'bold',
  },
  spinner: {
    marginBottom: 30,
  },
});

Logo.defaultProps = {

  spinner: true,
  spinnerColor: 'black',
  message: 'Soon is ready',
};
Logo.propTypes = {

  spinner: PropTypes.bool,
  spinnerColor: PropTypes.string,
  message: PropTypes.string,
};
