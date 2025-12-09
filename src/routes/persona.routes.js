import express from "express";
import {
  getAllPersonas,
  getPersona,
  createPersona,
  updatePersona,
  deletePersona,
} from "../controllers/persona.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", isAuthenticated, hasRole("Administrador"), getAllPersonas);
router.get("/:id", isAuthenticated, hasRole("Administrador"), getPersona);
router.post("/", isAuthenticated, hasRole("Administrador"), createPersona);
router.put("/:id", isAuthenticated, hasRole("Administrador"), updatePersona);
router.delete("/:id", isAuthenticated, hasRole("Administrador"), deletePersona);

export default router;
