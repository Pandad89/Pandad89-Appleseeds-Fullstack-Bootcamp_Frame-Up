import axios from "axios";
import { API_KEY } from "../config";

let Url = `https://api.themoviedb.org/3`;

const apiUrl = axios.create({
  baseURL: Url,
  params: { api_key: API_KEY },
});

export default apiUrl;
