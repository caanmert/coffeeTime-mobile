/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MarkerList from '../MarkerList';

const Map = ({ machines, initialRegion }) => (
  <>
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      showsMyLocationButton
      showsUserLocation
      zoomEnabled
      loadingEnabled
      mapType="standard"
      loadingBackgroundColor="#e9dcbe"
      loadingIndicatorColor="black"
      moveOnMarkerPress={false}
    >
      <MarkerList machines={machines} />
    </MapView>
  </>
);
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
