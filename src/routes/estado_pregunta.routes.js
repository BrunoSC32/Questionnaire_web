import express from "express";
import {
  getAllEstadoPreguntas,
  getEstadoPregunta,
  createEstadoPregunta,
  updateEstadoPregunta,
  deleteEstadoPregunta,
} from "../controllers/estado_pregunta.controller.js";

const router = express.Router();

router.get("/", getAllEstadoPreguntas);
router.get("/:id", getEstadoPregunta);
router.post("/", createEstadoPregunta);
router.put("/:id", updateEstadoPregunta);
router.delete("/:id", deleteEstadoPregunta);

export default router;
