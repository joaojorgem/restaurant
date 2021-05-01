import axios from 'axios';

const http = axios.create({
    baseURL: 'https://restaurant-joao-backend.herokuapp.com/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;
