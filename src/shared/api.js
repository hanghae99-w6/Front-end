import axios from 'axios';

const SERVER_IP = process.env.REACT_APP_REST_IP_ADDR;

export const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const api = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
  },
});

export const api_image = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'multipart/form-data',
  },
});
