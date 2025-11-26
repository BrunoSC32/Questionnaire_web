import express from "express";
import {
  getAllExamenPreguntas,
  getExamenPregunta,
  createExamenPregunta,
  updateExamenPregunta,
  deleteExamenPregunta,
} from "../controllers/examen_pregunta.controller.js";

const router = express.Router();

router.get("/", getAllExamenPreguntas);
router.get("/:id", getExamenPregunta);
router.post("/", createExamenPregunta);
router.put("/:id", updateExamenPregunta);
router.delete("/:id", deleteExamenPregunta);

export default router;
