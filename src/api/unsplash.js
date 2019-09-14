import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 7c8bf615e345fdb0c51dc2aadaed5c264bf424d257a42b5eada1ffbca24f60ac'
       }
});
