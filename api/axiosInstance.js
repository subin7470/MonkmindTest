import axios from 'axios';

const API_URL = 'http://165.232.159.152:5002';

export default axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
