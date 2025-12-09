import express from "express";
import {
  getAllRespuestas,
  getRespuesta,
  createRespuesta,
  updateRespuesta,
  deleteRespuesta,
} from "../controllers/respuesta.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor", "Gestor"),
  getAllRespuestas
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor", "Gestor"),
  getRespuesta
);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  createRespuesta
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  updateRespuesta
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  deleteRespuesta
);

export default router;
