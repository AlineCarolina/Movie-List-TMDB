import { Router } from "express";
import { searchMovies, searchDetails } from "../controllers/movieController.js";

const router = Router();

router.get("/search", searchMovies);
router.get("/:id", searchDetails);

export default router;