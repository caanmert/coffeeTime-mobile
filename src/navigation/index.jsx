import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from '../screens/SplashScreen';
import MapScreen from '../screens/MapScreen';
import locationPermission from '../permissions/locationPermission';
import MarkerModal from '../screens/MapScreen/MarkerModal';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (

  <Stack.Navigator screenOptions={{
    headerShown: false,
    // gestureEnabled: true,
    // cardOverlayEnabled: true,

  }}
  >

    <Stack.Screen name="MapScreen" component={MapScreen} />

  </Stack.Navigator>

);

export default () => {
  const [isPermissionGranted, setisPermissionGranted] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const res = await locationPermission();
      if (res) setisPermissionGranted(true);
    }, 3000);

    return () => {};
  }, []);

  return (

    <NavigationContainer>

      {isPermissionGranted ? <StackNavigation />
        : <SplashScreen isGranted={(bool) => setisPermissionGranted(bool)} />}

    </NavigationContainer>

  );
};
