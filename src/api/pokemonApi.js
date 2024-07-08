import axios from "axios";
import { POKE_PER_PAGE, MAX_POKE_COUNT } from "../helpers/constants";
const axiosInstance = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
});
export const getPokemons = (page) => {
  const offSet = POKE_PER_PAGE * (page - 1);
  return axiosInstance.get(`?offset=${offSet}&limit=${POKE_PER_PAGE}`);
};

export const getPokemonWithId = (pokeId) => {
  return axiosInstance.get(`/${pokeId}`);
};
export const getPokemonWithUrl = (url) => {
  return axios.get(url);
};
