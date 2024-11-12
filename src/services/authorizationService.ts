import axiosInstance from './axiosInstance';

const authorizationService = {
  loginRequest: (data: { email: string; password: string }) => {
    return axiosInstance.post('auth/login', data);
  },
};

export default authorizationService;
