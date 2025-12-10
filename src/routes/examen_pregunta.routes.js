import express from "express";
import {
  getAllExamenPreguntas,
  getExamenPregunta,
  createExamenPregunta,
  updateExamenPregunta,
  deleteExamenPregunta,
} from "../controllers/examen_pregunta.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Editor"),
  getAllExamenPreguntas
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Editor"),
  getExamenPregunta
);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  createExamenPregunta
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  updateExamenPregunta
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  deleteExamenPregunta
);

export default router;
