import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import libros from "./routes/libros.js";

dotenv.config();

const serv = express();

serv.use(express.json());
serv.use(cors());
serv.use("/api/libros", libros);


serv.listen(process.env.PORT,() =>console.log("Backend Server Running On Port : " + process.env.PORT));

db.dbConnection();