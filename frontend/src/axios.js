import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Change to your backend URL
  withCredentials: true, // Allow cookies and credentials (if needed)
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
