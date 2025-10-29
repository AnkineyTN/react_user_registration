import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../services/authService';
import { Navigate, useNavigate } from 'react-router-dom';

export const useRegisterUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    
    onSuccess: () => {
      alert('Sign up successfully! Please log in.');
      navigate('/signin');
    },
    
    onError: (error) => {
      console.error('Error from custom hook:', error);
    },
  });
};