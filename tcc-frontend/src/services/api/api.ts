import axios from 'axios';
import { getUserLocalStorage } from '../../context/util';

export const api = axios.create({
    baseURL: 'http://localhost:8080/'
    //baseURL: 'https://reqres.in/'
})

api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage();

        if( !!user && !!user.token ){
            if(!!config.headers){
                config.headers.Authorization = 'Bearer ' + user?.token;
            } else {
                config.headers = { Authorization: 'Bearer ' + user?.token }
            }
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)