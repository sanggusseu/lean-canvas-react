import axios from 'axios';

function create(baseURL, options = {}) {
  const instance = axios.create({
    baseURL,
    ...options,
  });
  return instance;
}

export const canvases = create(`${import.meta.env.VITE_API_BASE_URL}/canvases`);
