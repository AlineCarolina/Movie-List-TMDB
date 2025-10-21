import { getMoviesFromTMDB } from "../services/movieService.js";

export async function searchMovies(req, res) {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Missing search query" });

  try {
    const movies = await getMoviesFromTMDB(query);
    res.json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}