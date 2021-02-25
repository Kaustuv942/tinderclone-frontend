import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinderclone123kkc.herokuapp.com'
})

export default instance;