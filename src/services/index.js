import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sistemadeagendamento-san5v.ondigitalocean.app/',
});

export default api;
