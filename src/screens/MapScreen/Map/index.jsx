import React, { useEffect, useState, createRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Geolocation from 'react-native-geolocation-service';
import MarkerList from '../MarkerList';
import MarkerModal from '../MarkerModal';

/* const initialRegion = {
  latitude: 43.21059001671995,
  longitude: 27.922115234775568,
  latitudeDelta: 0.002,
  longitudeDelta: 0.0035,
}; */

const Map = ({ machines, initialRegion }) => {
  // const [machines, setMachines] = useState();

  const bottomSheetRef = createRef(BottomSheetModal);

  const [selectedMachine, setSelectedMachine] = useState(undefined);
  // const [ismapReady, setisMapReady] = useState(false);
  useEffect(() => () => {
    console.log(`MAP${initialRegion}`);
    // console.log(`MAP${region}`);
  }, []);
  /*
  useEffect(() => () => {
    Geolocation.watchPosition((position) => {
    });
  }, []); */

  const onMarkerPress = (machine) => {
    console.log(machine);
    console.log('onMarkerPress');
    setSelectedMachine(machine);
    bottomSheetRef.current.present();
  };

  const onMapPress = () => {
    console.log('onMapPress');
    bottomSheetRef.current.close();
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
        loadingBackgroundColor="wheat"
        onPress={() => onMapPress()}
        onMapReady={(e) => console.log(e)}
       // region={region}

      >
        <MarkerList machines={machines} onPress={(machine) => onMarkerPress(machine)} />

      </MapView>

      <MarkerModal modalRef={bottomSheetRef} machine={selectedMachine} />
    </>

  );
};
const styles = StyleSheet.create({

  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
