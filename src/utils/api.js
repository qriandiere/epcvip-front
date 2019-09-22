import {create} from 'axios'
import store from '../store'


const api = function (headers = null) {
    let options = {
        baseURL: process.env.VUE_APP_API_URL,
        headers: []
    };
    options['headers'] = headers === null ? {
        'X-Auth-Token': localStorage.getItem('token')
    } : headers;
    const requester = create(options);
    requester.interceptors.response.use((response) => {
        return response;
    }, (e) => {
        if (e.request.status === 401 && store.getters['user/isAuthenticated']) {
            window.localStorage.clear();
            location.reload();
        }
        return {
            status: e.request.status,
            message: JSON.parse(e.request.response).message
        }
    });
    return requester;
};

export default api
