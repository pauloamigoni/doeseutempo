import axios from 'axios';

const api = axios.create({
    baseURL: 'http://134.122.123.194:3334',
})

export default api;