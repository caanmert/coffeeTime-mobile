import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />

  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);
