import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-ef74e.firebaseio.com/"
});

export default instance;