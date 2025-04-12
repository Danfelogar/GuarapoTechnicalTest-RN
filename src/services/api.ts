import axios, {type AxiosRequestConfig} from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://rickandmortyapi.com/api',
};

export const RickAndMortyApi = axios.create(axiosConfig);
