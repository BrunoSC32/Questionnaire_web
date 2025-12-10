import express from "express";
import {
  getAllCiclos,
  getCiclo,
  createCiclo,
  updateCiclo,
  deleteCiclo,
} from "../controllers/ciclo.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  getAllCiclos
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Gestor"),
  getCiclo
);
router.post("/", isAuthenticated, hasRole("Administrador"), createCiclo);
router.put("/:id", isAuthenticated, hasRole("Administrador"), updateCiclo);
router.delete("/:id", isAuthenticated, hasRole("Administrador"), deleteCiclo);

export default router;
