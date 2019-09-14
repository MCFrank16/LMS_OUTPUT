import axios from 'axios';

export default axios.create({
    baseURL: 'https://authors-heaven.herokuapp.com/api/users',
    headers:{
        'Content-Type': 'application/json'
    }
});