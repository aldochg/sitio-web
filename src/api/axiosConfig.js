import axios from 'axios';

const getToken = () => {
  const tokenString = JSON.parse(localStorage.getItem('token'));
  return tokenString;
};

const apiUrl = import.meta.env.VITE_API_URL;
//const apiUrl = "http://127.0.0.1:8000/";

console.log(apiUrl)

const http = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

export default http;
