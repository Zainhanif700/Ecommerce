import axios from 'axios';

export const API_BASE_URL = "https://lowtechgmbh-backend-c9acdwfthaaye6e2.canadacentral-01.azurewebsites.net";
// export const API_BASE_URL = "http://localhost:8080";

const jwt = localStorage.getItem('jwt');

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: jwt ? `Bearer ${jwt}` : '', 
        'Content-Type': 'application/json',     
    },
    withCredentials: true, 
});

export const apiForm = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: jwt ? `Bearer ${jwt}` : '', 
    },
    withCredentials: true, 
});