import express from "express";
import {
  getAllTipoPreguntas,
  getTipoPregunta,
  createTipoPregunta,
  updateTipoPregunta,
  deleteTipoPregunta,
} from "../controllers/tipo_pregunta.controller.js";

const router = express.Router();

router.get("/", getAllTipoPreguntas);
router.get("/:id", getTipoPregunta);
router.post("/", createTipoPregunta);
router.put("/:id", updateTipoPregunta);
router.delete("/:id", deleteTipoPregunta);

export default router;
