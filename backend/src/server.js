import sequelize from "./config/database.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

sequelize.sync({ alter: true }) // cria tabelas se não existirem
  .then(() => console.log("Banco sincronizado!"))
  .catch((err) => console.error("Erro ao sincronizar banco:", err));

app.use(cors());
app.use(express.json());

app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(3000, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});