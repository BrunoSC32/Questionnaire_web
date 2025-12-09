import express from "express";
import {
  getAllParticipantes,
  getParticipante,
  createParticipante,
  updateParticipante,
  deleteParticipante,
} from "../controllers/participante.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  getAllParticipantes
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  getParticipante
);
router.post("/", isAuthenticated, hasRole("Administrador"), createParticipante);
router.put("/:id", isAuthenticated, hasRole("Administrador"), updateParticipante);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  deleteParticipante
);

export default router;
