import express from "express";
import {
  getAllGestores,
  getGestor,
  createGestor,
  updateGestor,
  deleteGestor,
} from "../controllers/gestor.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", isAuthenticated, hasRole("Administrador"), getAllGestores);
router.get("/:id", isAuthenticated, hasRole("Administrador"), getGestor);
router.post("/", isAuthenticated, hasRole("Administrador"), createGestor);
router.put("/:id", isAuthenticated, hasRole("Administrador"), updateGestor);
router.delete("/:id", isAuthenticated, hasRole("Administrador"), deleteGestor);

export default router;
