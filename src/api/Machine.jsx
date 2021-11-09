import axios from 'axios';

const BaseURL = 'http://192.168.0.101:5000/api/machines';

// eslint-disable-next-line import/prefer-default-export
export const fetchMachines = () => axios.get(BaseURL);
