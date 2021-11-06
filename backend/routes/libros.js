import express from "express";
import libros from "../controllers/libros.js";

const routes = express.Router();

routes.post("/registerBook", libros.registerBook);

export default routes;