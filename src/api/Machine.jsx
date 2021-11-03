import axios from 'axios';

const BaseURL = 'http://localhost:5000/api/machines';

// eslint-disable-next-line import/prefer-default-export
export const fetchMachines = async () => axios.get(BaseURL);
