import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
