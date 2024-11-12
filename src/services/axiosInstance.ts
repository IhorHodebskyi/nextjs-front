import axios from 'axios';
const url = process.env.NEXT_PUBLIC_API_URL;

const config = {
  baseURL: url,
  withCredentials: true,
};

const axiosInstance = axios.create({
  ...config,
});

export default axiosInstance;
