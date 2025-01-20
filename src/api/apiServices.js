import http from './axiosConfig';

const getToken = () => {
  const tokenString = JSON.parse(localStorage.getItem('token'));
  return tokenString;
};

const deleteToken = () => {
  localStorage.removeItem('token');
};

const setToken = (token) => {
  localStorage.setItem('token', JSON.stringify(token));
};

const getData = async (endpoint) => {
  try {
    const response = await http.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error realizando GET:', error);
    throw error;
  }
};

const postData = async (endpoint, data) => {
  try {
    const response = await http.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error realizando POST:', error);
    throw error;
  }
};

const updateData = async (endpoint, data) => {
  try {
    const response = await http.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error realizando PUT:', error);
    throw error;
  }
};

const deleteData = async (endpoint) => {
  try {
    const response = await http.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error realizando DELETE:', error);
    throw error;
  }
};

const ApiServices = {
  getToken,
  deleteToken,
  setToken,
  getData,
  postData,
  updateData,
  deleteData,
};

export default ApiServices;
