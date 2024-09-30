import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonList = async (limit, offset) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
