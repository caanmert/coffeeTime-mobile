import React, { useRef, useEffect, useState } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Linking, PermissionsAndroid, Platform, Alert, AppState,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from '../screens/SplashScreen';
import MapScreen from '../screens/MapScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/*  <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
    <Stack.Screen name="MapScreen" component={MapScreen} />

  </Stack.Navigator>
);

export default () => {
  const [isPermissionGranted, setisPermissionGranted] = useState(false);
  // const [isPermissionGranted, setisPermissionGranted] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // console.log(settingOpen);

  useEffect(() => {
    setTimeout(() => {
      requestPermission();
    }, 3000);
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      try {
        const res = await Geolocation.requestAuthorization('whenInUse');
        if (res === 'granted') {
          console.log('granted');
          return setisPermissionGranted(true);
        } if (res === 'denied' || 'disabled' || 'false') {
          setisPermissionGranted(false);
          return Alert.alert(
            'Access your location',
            'We require your location to find the nearby coffee machines.',
            [

              { text: 'Open Settings', style: 'default', onPress: () => onPress() },
            ],
          );
        }
      } catch (error) {
        console.log(`catch${error}`);
      }
    }
  };

  const onPress = () => {
    Linking.openURL('App-Prefs:Privacy&path=LOCATION');
  };

  useEffect(() => {
    console.log('second useffect');
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active' && !isPermissionGranted) {
        console.log('App has come to the foreground!');
        return requestPermission();
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <NavigationContainer>
      {isPermissionGranted ? <StackNavigation /> : <SplashScreen isLoading={isLoading} />}

    </NavigationContainer>
  );
};
