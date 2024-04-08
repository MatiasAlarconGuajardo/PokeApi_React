import axios from "axios"

const BASE_URL="https://pokeapi.co/api/v2/pokemon"

export const instance = axios.create({
    baseURL:BASE_URL
});