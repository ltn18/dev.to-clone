import axios from 'axios';
// const axios = require('axios').default;
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
})

export default axiosInstance;