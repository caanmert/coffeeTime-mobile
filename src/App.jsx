import React, { useRef, useEffect, useState } from 'react';
import {
  AppState, Platform, Linking, Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Navigation from './navigation/index';

const App = () => (
  <Navigation />

);
// const [settingOpen, setSettingOpen] = useState(false);
/*   useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
        requestPermission();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []); */

/*  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const res = await Geolocation.requestAuthorization('always');
        console.log(res);
        if (res === 'granted') {
          setisPermissionGranted(true);
        } else if (res === 'denied' || 'disabled' || 'false') {
          Alert.alert(
            'Access your location',
            'We require your location to find the nearby coffee machines.',
            [

              { text: 'Open Settings', style: 'default', onPress: () => Linking.openURL('App-Prefs:Privacy&path=LOCATION') },
            ],
          );
        }
      } catch (error) {
        console.log(`catch${error}`);
      }
    }
  }; */

export default App;
