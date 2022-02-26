import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    params: {
        apikey: process.env.REACT_APP_API_KEY,
        base_currency:"EUR"
    }
})