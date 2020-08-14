import axios from 'axios';

const api = axios.create({
    baseURL : 'https://jobs.github.com/',
    timeout : 1000
});
export default api;