/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Fontisto';
import PropTypes from 'prop-types';

const CoffeeIcon = <Icon name="coffeescript" size={30} color="brown" />;

const MarkerList = ({ machineLocations, onPress }) => {
  console.log(machineLocations);
  return (
    <>
      { machineLocations.map((machineLocation) => (
        <Marker
          key={machineLocation._id}
          identifier={machineLocation._id}
          coordinate={{
            latitude: machineLocation.location.coordinates[0],
            longitude: machineLocation.location.coordinates[1],
          }}
          onPress={onPress}
        >
          {/*   <Icon name="coffeescript" size={20} color="brown" /> */}
          {CoffeeIcon}

        </Marker>
      ))}
    </>

  );
};

MarkerList.defaultProps = {

  machineLocations: [41.023420109586525, 28.976714156886473],
  onPress: () => {},
};
MarkerList.propTypes = {

  machineLocations: PropTypes.arrayOf(PropTypes.object),
  onPress: PropTypes.func,

};
export default MarkerList;
