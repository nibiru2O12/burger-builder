import axios from 'axios';

const order = axios.create({
    baseURL:'https://react-my-project-9721b.firebaseio.com'
});

export default order;