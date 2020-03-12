import axios from 'axios';

export default axios.create({
  baseURL: 'https://stevkat.firebaseio.com/'
});
