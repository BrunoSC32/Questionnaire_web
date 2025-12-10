import express from "express";
import {
  getAllExamenes,
  getExamen,
  createExamen,
  updateExamen,
  deleteExamen,
} from "../controllers/examen.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Editor", "Participante"),
  getAllExamenes
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor", "Editor", "Participante"),
  getExamen
);
router.post("/", isAuthenticated, hasRole("Administrador", "Gestor"), createExamen);
router.put("/:id", isAuthenticated, hasRole("Administrador", "Gestor"), updateExamen);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  deleteExamen
);

export default router;
