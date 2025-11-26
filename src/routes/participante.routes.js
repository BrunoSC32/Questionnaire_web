import express from "express";
import {
  getAllParticipantes,
  getParticipante,
  createParticipante,
  updateParticipante,
  deleteParticipante,
} from "../controllers/participante.controller.js";

const router = express.Router();

router.get("/", getAllParticipantes);
router.get("/:id", getParticipante);
router.post("/", createParticipante);
router.put("/:id", updateParticipante);
router.delete("/:id", deleteParticipante);

export default router;
