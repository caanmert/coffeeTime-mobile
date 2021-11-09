import React, {
  useEffect, useState, useRef, createRef,
} from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import MarkerList from '../MarkerList';
import MarkerModal from '../MarkerModal';

const Map = ({ initialRegion, machineLocations }) => {
  // const bottomSheetModalRef = useRef < BottomSheetModal > (null);
  const bottomSheetModalRef = createRef(BottomSheetModal);
  useEffect(() => () => {
    console.log(initialRegion);
  }, []);

  const onMarkerPress = () => {
    console.log('onMarkerPress');
    bottomSheetModalRef.current?.present();
  };

  return (
    <>
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
        <MarkerList machineLocations={machineLocations} onPress={() => onMarkerPress()} />

      </MapView>
      <MarkerModal modalRef={bottomSheetModalRef} />
    </>
  );
};
const styles = StyleSheet.create({

  map: {
    flex: 1,
  },
});

export default Map;
