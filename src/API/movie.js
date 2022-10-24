import axios from 'axios';

const API_KEY = 'df7934f249ad19ef751a3c7ae05883e7';
const baseUrl = 'https://api.themoviedb.org/3/';
const urlNews = 'https://api.nytimes.com/svc/archive/v1/';
const apiKeyNews = 'jOzwDoPO5ObQeWX9QBDa8Ggj63mcqN9n';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

const nytimes = axios.create({
  baseURL: urlNews,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*',
    'Access-Control-Allow-Origin': 'http://localhost:3001/',
  },
  params: {
    'api-key': apiKeyNews
  }
});

export default tmdb;
export { nytimes };
