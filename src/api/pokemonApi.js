import axios from "axios";
import { POKE_PER_PAGE, MAX_POKE_COUNT } from "../helpers/constants";
const axiosInstance = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});
export const getPokemons = (page) => {
  const offSet = POKE_PER_PAGE * (page - 1);

  return axiosInstance.get(`/pokemon?offset=${offSet}&limit=${POKE_PER_PAGE}`);
};

export const getPokemonWithId = (pokeId) => {
  return axiosInstance.get(`/pokemon/${pokeId}`);
};
export const getPokemonWithUrl = (url) => {
  return axios.get(url);
};
