import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Map from './Map';

const MapScreen = () => {
  const [userLocation, setuserLocation] = useState();
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;

        setuserLocation({
          latitude,
          longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.0035,
        });
      },
      (error) => {
        alert(error.message);
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    return () => { };
  }, []);

  return (
    <View style={styles.container}>
      <Map initialRegion={userLocation} />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
