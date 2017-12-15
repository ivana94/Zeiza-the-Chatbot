import axios from 'axios';

var instance = axios.create({
    xsrfCookieName: 'my favorite cinnamon bun recipe',
    xsrfHeaderName: 'csrf-token'
});

export default instance;
