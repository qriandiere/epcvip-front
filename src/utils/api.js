import {create} from 'axios'

const api = function (headers = null) {
    let options = {
        baseURL: process.env.API,
        headers: []
    };
    options['headers'] = headers === null ? {
        'X-Auth-Token': localStorage.getItem('token')
    } : headers;
    const requester = create(options);
    requester.interceptors.response.use((response) => {
        return response;
    }, (e) => {
        if (e.request.status === 401) {
            window.localStorage.clear();
            location.reload();
        }
        return e.request;
    });
    return requester;
};

export default api
