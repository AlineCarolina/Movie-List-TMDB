import { Router } from "express";
import { searchMovies } from "../controllers/movieController.js";

const router = Router();

router.get("/search", searchMovies);

export default router;