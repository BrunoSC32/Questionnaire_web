import express from "express";
import {
  getAllRespuestasParticipante,
  getRespuestaParticipante,
  createRespuestaParticipante,
  updateRespuestaParticipante,
  deleteRespuestaParticipante,
} from "../controllers/respuesta_participante.controller.js";

const router = express.Router();

router.get("/", getAllRespuestasParticipante);
router.get("/:id", getRespuestaParticipante);
router.post("/", createRespuestaParticipante);
router.put("/:id", updateRespuestaParticipante);
router.delete("/:id", deleteRespuestaParticipante);

export default router;
