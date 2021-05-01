import axios from 'axios';

const http = axios.create({
    baseURL: 'https://3333-olive-quail-cng1tzlo.ws-us04.gitpod.io/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default http;
