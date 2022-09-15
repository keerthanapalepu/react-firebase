import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000/api/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
       console.log(JSON.parse(localStorage.getItem('profile')).currentuser.stsTokenManager.accessToken);
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).currentuser.stsTokenManager.accessToken}`;
    }

    return req;
});
export const fetchUser = () => API.get(`/user`);
