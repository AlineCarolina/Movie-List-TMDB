import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export async function getMoviesFromTMDB(query: string) {
  const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: {
      query: query,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  });

  return response.data.results;
}