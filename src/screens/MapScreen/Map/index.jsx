/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import MarkerList from '../MarkerList';
import MarkerModal from '../MarkerModal';

const Map = ({ machines, initialRegion }) => {
  // const bottomSheetRef = createRef(BottomSheetModal);
  // const [selectedMachine, setSelectedMachine] = useState(undefined);

  const onMarkerPress = (machine) => {
    // setSelectedMachine(machine);
    // bottomSheetRef.current.present();
  };
  const onMapPress = () => {
    // bottomSheetRef.current.close();
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
        mapType="standard"
        loadingBackgroundColor="#e9dcbe"
        loadingIndicatorColor="black"
       // onPress={() => onMapPress()}
       // onMapReady={(e) => console.log(e)}
        moveOnMarkerPress={false}
       // region={region}

      >
        <MarkerList machines={machines} onPress={(machine) => onMarkerPress(machine)} />

      </MapView>

      {/*  <MarkerModal modalRef={bottomSheetRef} machine={selectedMachine} /> */}
    </>

  );
};
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

Map.defaultProps = {
  machines: [],
  initialRegion: {
    latitude: 43.21059001671995,
    longitude: 27.922115234775568,
    latitudeDelta: 0.002,
    longitudeDelta: 0.0035,
  },
};
Map.propTypes = {
  machines: PropTypes.arrayOf(PropTypes.object),
  initialRegion: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    latitudeDelta: PropTypes.number.isRequired,
    longitudeDelta: PropTypes.number.isRequired,
  }),
};

export default Map;
