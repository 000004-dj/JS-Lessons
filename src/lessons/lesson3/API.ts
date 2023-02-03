import axios from 'axios';

const key = 'abe694ed';
const configOMB = {
    baseURL: `https://www.omdbapi.com/`,
};

const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    return axiosInstance.get(`?s=${title}&apikey=${key}&`)
         .then(response => response.data.Search)
    },
    searchFilmsByType: (title: string, type: string) => {
       return axiosInstance.get(`?s=${title}&type=${type}&apikey=${key}&`)
            .then(response => {
                return response.data.Search})
    },

};



export default API;
