import express from "express";
import { crearPregunta } from "../controllers/pregunta.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", isAuthenticated, hasRole("Editor"), crearPregunta);

export default router;
