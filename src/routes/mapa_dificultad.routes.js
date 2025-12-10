import express from "express";
import {
  getAllMapas,
  getMapa,
  createMapa,
  updateMapa,
  deleteMapa,
} from "../controllers/mapa_dificultad.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor", "Gestor"),
  getAllMapas
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor", "Gestor"),
  getMapa
);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  createMapa
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  updateMapa
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  deleteMapa
);

export default router;
