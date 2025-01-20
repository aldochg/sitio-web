import axios from 'axios';

const getToken = () => {
  const tokenString = JSON.parse(localStorage.getItem('token'));
  return tokenString;
};

const apiUrl = import.meta.env.VITE_APP_API_URL;

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export default http;
