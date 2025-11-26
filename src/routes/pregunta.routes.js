import express from "express";
import { crearPregunta } from "../controllers/pregunta.controller.js";

const router = express.Router();

router.post("/", crearPregunta);

export default router;
