import axios from 'axios';

const api = axios.create({
    baseURL: 'https://box-omni.herokuapp.com/',
});

export default api;