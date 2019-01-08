import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-75793.firebaseio.com/'
});

export default instance;