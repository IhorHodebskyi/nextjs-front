import authorizationService from '@/services/authorizationService';
import { Notify } from 'notiflix';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authorizationService.loginRequest(data),
    onSuccess: () => {},
    onError: (error: AxiosError) => {
      Notify.failure(`${error.response?.data}`, {
        position: 'right-top',
        clickToClose: true,
        timeout: 5000,
        cssAnimationStyle: 'zoom',
      });
    },
  });
};
