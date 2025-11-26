import express from "express";
import {
  getAllMapas,
  getMapa,
  createMapa,
  updateMapa,
  deleteMapa,
} from "../controllers/mapa_dificultad.controller.js";

const router = express.Router();

router.get("/", getAllMapas);
router.get("/:id", getMapa);
router.post("/", createMapa);
router.put("/:id", updateMapa);
router.delete("/:id", deleteMapa);

export default router;
