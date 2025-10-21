import axios from "axios";
import { TMDB_BASE_URL, TMDB_API_KEY } from "../config/tmdbConfig.js";

export async function getMoviesFromTMDB(query) {
  const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: {
      api_key: TMDB_API_KEY,
      query: query,
    },
  });
  return response.data.results;
}