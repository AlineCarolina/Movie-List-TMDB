import axios from "axios";
import { TMDB_BASE_URL, TMDB_API_KEY } from "../config/tmdbConfig.js";

export async function getMoviesFromTMDB(query) {
  const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: {
      query: query,
    },
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`
  }
  });
  return response.data.results;
}

export async function getMovieDetails(id) {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: {
        language: "pt-BR",     // opcional: idioma da resposta
      },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    throw error;
  }
}