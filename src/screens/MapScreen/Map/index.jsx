import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import MarkerList from '../MarkerList';

const Map = ({ initialRegion, machineLocations }) => {
  useEffect(() => () => {
    console.log(initialRegion);
  }, []);

  const onMarkerPress = () => {
    console.log('onMarkerPress');
  };

  return (

    <MapView
      style={styles.map}
      // provider={PROVIDER_GOOGLE}
      initialRegion={initialRegion}
      showsMyLocationButton
      showsUserLocation
      zoomEnabled
      loadingEnabled
      onMapReady-={() => console.log('readt')}
    >
      <MarkerList machineLocations={machineLocations} onPress={onMarkerPress} />
    </MapView>

  );
};
const styles = StyleSheet.create({

  map: {
    flex: 1,
  },
});

export default Map;
