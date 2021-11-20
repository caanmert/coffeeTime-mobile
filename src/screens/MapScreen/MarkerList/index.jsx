/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const CoffeeIcon = <Icon name="coffee-maker" size={20} color="brown" />;

const MarkerList = ({ machines, onPress }) => (
  <>
    { machines.map((machine) => (
      <Marker
        key={machine._id}
        identifier={machine._id}
        coordinate={{
          latitude: machine.location.coordinates[0],
          longitude: machine.location.coordinates[1],
        }}
        onPress={() => onPress(machine)}
      >
        {CoffeeIcon}
      </Marker>
    ))}
  </>

);

MarkerList.defaultProps = {

  machines: [41.023420109586525, 28.976714156886473],
  onPress: () => {},
};
MarkerList.propTypes = {

  machines: PropTypes.arrayOf(PropTypes.object),
  onPress: PropTypes.func,

};
export default MarkerList;
