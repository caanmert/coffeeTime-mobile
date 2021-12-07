/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const BaseURL = 'https://coffeetime.link/api/machines';
export const fetchMachinesByUserLocation = (lat, long) => axios.get(`${BaseURL}/mylocation/${lat}/${long}`);
