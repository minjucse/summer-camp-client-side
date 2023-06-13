import axios from 'axios';

const BASE_URL = 'https://summer-camp-server-ten.vercel.app/api/';
const headers = { 'Content-Type': 'application/json' }

const userCreate = (subUrl, data) => {
    let url = BASE_URL + subUrl;

    return axios.post(url, data, { headers: headers });
};

  const userUpdate = (subUrl,  data) => {
    let url = BASE_URL + subUrl;
    return axios.patch(url, data, { headers: headers });
  };
  const getAll  = (subUrl) => {
    let url = BASE_URL + subUrl;
    return axios.get(url, { headers: headers });
  };
  const deleteData  = (subUrl) => {
    let url = BASE_URL + subUrl;
    return axios.delete(url, { headers: headers });
  };
export default {
    userCreate,
    userUpdate,
    getAll,
    deleteData,
    BASE_URL
}

