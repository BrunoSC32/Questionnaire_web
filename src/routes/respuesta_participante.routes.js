import express from "express";
import {
  getAllRespuestasParticipante,
  getRespuestaParticipante,
  createRespuestaParticipante,
  updateRespuestaParticipante,
  deleteRespuestaParticipante,
} from "../controllers/respuesta_participante.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Participante"),
  getAllRespuestasParticipante
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Participante"),
  getRespuestaParticipante
);
router.post(
  "/",
  isAuthenticated,
  hasRole("Participante", "Administrador", "Gestor"),
  createRespuestaParticipante
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Participante", "Administrador", "Gestor"),
  updateRespuestaParticipante
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  deleteRespuestaParticipante
);

export default router;
