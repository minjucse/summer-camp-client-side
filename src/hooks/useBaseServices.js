import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const headers = { 'Content-Type': 'application/json' }

const userCreate = (subUrl, data) => {
    let url = BASE_URL + subUrl;

    return axios.post(url, data, { headers: headers });
};



export default {
    userCreate,
    BASE_URL
}

