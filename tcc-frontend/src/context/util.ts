import { IUser } from './types';
import { api } from './../services/api';

export function setUserLocalStorage(user:IUser | null){
    localStorage.setItem('u', JSON.stringify(user));
}

export function removeUserLocalStorage(){
    localStorage.removeItem('u');
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u');

    if(!json){
        return null;
    }

    return JSON.parse(json) ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await api.post('api/login',{ email, password});
        return request.data;
    } catch (error) {
        return null;
    }
}