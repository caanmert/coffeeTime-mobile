import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { fetchMachines } from '../../api/Machine';
import Logo from '../../components/Logo';
import Map from './Map';

const MapScreen = () => {
  const [userLocation, setuserLocation] = useState();
  const [machineLocation, setmachineLocation] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [message, setMessage] = useState('message');

  useEffect(() => {
    setMessage('Getting your location');
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
        setisLoading(false);

        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    return () => { };
  }, []);

  useEffect(() => {
    setMessage('Getting machines around you');
    fetchMachines().then((res) => {
      if (res.data.success) {
        setmachineLocation(res.data.machines);
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      }
    }).catch((error) => {
      setisLoading(false);
      console.log(error.message);
    });
  }, []);

  return (
    <View style={styles.container}>

      { isLoading ? <Logo message={message} spinner={isLoading} />
        : (
          <Map
            initialRegion={userLocation}
            machineLocations={machineLocation}
          />
        )}
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
