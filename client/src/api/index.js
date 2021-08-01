import axios from 'axios';

export function authLogin(data) {
  return axios.post('/api/auth/login', data);
}

export function authCreate(data) {
  return axios.post('/api/auth/create', data);
}

export function authVerify(data) {
  return axios.post('/api/auth/status', data);
}
