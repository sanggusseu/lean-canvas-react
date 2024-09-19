import axios from 'axios';

function create(baseURL, options = {}) {
  const instance = axios.create({
    baseURL,
    ...options,
  });
  return instance;
}

export const canvases = create('http://localhost:8000/canvases/');
