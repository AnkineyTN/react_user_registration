import apiClient from '../api/apiClient';

const API_ENDPOINT = '/users';

export const registerUser = async (userData) => {
  const { data } = await apiClient.post(`${API_ENDPOINT}/signup`, userData);
  return data;
};

export const loginUser = async (credentials) => {
  const { data } = await apiClient.post(`${API_ENDPOINT}/login`, credentials);
  return data;
};