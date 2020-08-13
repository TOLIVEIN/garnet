import axios from "axios";
import { USER_KEY } from '../../config';

const instance = axios.create({
    // baseURL: "https://api-v3.igdb.com/",
    // timeout: 6000,
    headers: {
        "Accept": "application/json",
        "user-key": USER_KEY,
    },
});

instance.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log("拦截器报错");
        return Promise.reject(error);
    }
);

const request = (method: string, url: string, data?: string) => {
    method = method.toLowerCase();
    // data = JSON.stringify(data);
    switch (method) {
        case "post":
            return instance.post(url, data);
        case "get":
            return instance.get(url, { params: data });
        case "delete":
            return instance.delete(url, { params: data });
        case "put":
            return instance.put(url, data);
        default:
            console.log(`不支持的请求类型: ${method}`);
            return;
    }
};

export default request;
