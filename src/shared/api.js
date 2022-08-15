import axios from "axios";

const accessToken = document.cookie.split("=")[1];
const refreshToken = document.cookie.split("=")[2];

export const api_auth = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Refresh-Token": `${refreshToken}`,
    Authorization: `bearer ${accessToken}`,
  },
});

export const api = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// hearder - multipart/form-data 
// Body key - multipartFile 