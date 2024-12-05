import { Model, DataTypes } from "sequelize";
import jwt from "jsonwebtoken";
import sequelize from "../config/sequelize";
import dotenv from "dotenv";
import TokenService from "../middleware/token";

dotenv.config();

class User extends Model {
  private userid!: number;
  private email!: string;
  private role: string = "user";

  public generateToken(): string {
    console.log("Generating token for user:", this.email);
    return TokenService.generateToken(this.userid, this.email, this.role);
  }
}

User.init(
  {
    userid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "user",
    timestamps: false,
  }
);

export default User;
