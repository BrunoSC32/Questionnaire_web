import express from "express";
import {
  getAllAdministradores,
  getAdministrador,
  createAdministrador,
  updateAdministrador,
  deleteAdministrador,
} from "../controllers/administrador.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  isAuthenticated,
  hasRole("Administrador"),
  getAllAdministradores
);
router.get(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  getAdministrador
);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador"),
  createAdministrador
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  updateAdministrador
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  deleteAdministrador
);

export default router;
