import express from "express";
import {
  getAllClasificaciones,
  getClasificacion,
  createClasificacion,
  updateClasificacion,
  deleteClasificacion,
} from "../controllers/clasificacion.controller.js";

const router = express.Router();

router.get("/", getAllClasificaciones);
router.get("/:id", getClasificacion);
router.post("/", createClasificacion);
router.put("/:id", updateClasificacion);
router.delete("/:id", deleteClasificacion);

export default router;
