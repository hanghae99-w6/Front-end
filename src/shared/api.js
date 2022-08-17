import axios from 'axios';
import { getCookie } from './cookie';

const SERVER_IP = process.env.REACT_APP_REST_IP_ADDR;

const accessToken = getCookie('authorization');
const refreshToken = window.localStorage.getItem('refresh-token');

export const api_auth = axios.create({
  baseURL: `http://${SERVER_IP}`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
    'refresh-token': `${refreshToken}`,
    authorization: `Bearer ${accessToken}`,
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
