import { Alert, Platform, Linking } from 'react-native';

const LocationPermissionAlert = () => {
  Alert.alert(
    'Access your location',
    'We require your location to find the nearby coffee machines.',
    [

      { text: 'Open Settings', style: 'default', onPress: () => onPress() },
    ],
  );

  const onPress = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('App-Prefs:Privacy&path=LOCATION');
    }
    if (Platform.OS === 'android') {
      Linking.openSettings();
    }
  };
};
export default LocationPermissionAlert;
