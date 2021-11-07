import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Map = ({ initialRegion }) => {
  useEffect(() => () => {
    console.log(initialRegion);
  }, []);
  return (

    <MapView
      style={styles.map}
      // provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      showsMyLocationButton
      showsUserLocation
      zoomEnabled
      loadingEnabled
    />
  );
};
const styles = StyleSheet.create({

  map: {
    flex: 1,
  },
});

export default Map;
