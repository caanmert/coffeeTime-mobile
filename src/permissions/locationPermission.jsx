/* eslint-disable no-const-assign */
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import LocationPermissionAlert from '../components/LocationPermissionAlert';

async function checkPermission(result) {
  switch (result) {
    case 'granted':
      return true;

    case 'denied':
      return false;

    case 'disabled':
      return false;

    case 'restricted':
      return false;

    default:
      return false;
  }
}

const platformCheck = async () => {
  if (Platform.OS === 'ios') {
    const res = await Geolocation.requestAuthorization('whenInUse');
    return checkPermission(res);
  } if (Platform.OS === 'android') {
    const res = await
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    return checkPermission(res);
  }
  return null;
};

const locationPermission = async () => {
  const isPermissionGranted = await platformCheck();
  if (!isPermissionGranted) { LocationPermissionAlert(); }
  return isPermissionGranted;
};

export default locationPermission;
