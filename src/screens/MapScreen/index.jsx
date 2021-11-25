import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Logo from '../../components/Logo';
import Map from './Map';
import { fetchMachinesByUserLocation } from '../../api/Machine';

const MapScreen = () => {
  const [userLocation, setuserLocation] = useState([]);
  const [machines, setMachines] = useState();
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
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
    return () => { };
  }, []);

  useEffect(() => {
    setMessage('Getting machines around you');

    // console.log(userLocation);
    fetchMachinesByUserLocation(userLocation.longitude, userLocation.latitude).then((res) => {
      if (res.data.success) {
        setMachines(res.data.machines);
        setTimeout(() => {
          setisLoading(false);
        }, 1000);
      }
    }).catch((error) => {
      alert(error.message);
      setisLoading(false);
    });
  }, [userLocation]);

  return (
    <GestureHandlerRootView style={styles.container}>
      { isLoading ? <Logo message={message} spinner={isLoading} />
        : (
          <Map
            initialRegion={userLocation}
            machines={machines}
          />
        )}
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
