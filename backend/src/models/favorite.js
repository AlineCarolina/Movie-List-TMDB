import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Favorite = sequelize.define("Favorite", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  movieId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  posterPath: { type: DataTypes.STRING },
});

// Relacionamento: um usuário tem muitos favoritos
User.hasMany(Favorite, { foreignKey: "userId" });
Favorite.belongsTo(User, { foreignKey: "userId" });

export default Favorite;
