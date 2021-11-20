/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// const BaseURL = 'http://192.168.0.101:5000/api/machines';
// const BaseURL = process.env.REACT_APP_API_PRODUCTION;
const BaseURL = 'https://coffeetime.cf/api/machines';
export const fetchMachinesByUserLocation = (lat, long) => axios.get(`${BaseURL}/mylocation/${lat}/${long}`);
