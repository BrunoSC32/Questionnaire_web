import express from "express";
import {
  getAllRespuestas,
  getRespuesta,
  createRespuesta,
  updateRespuesta,
  deleteRespuesta,
} from "../controllers/respuesta.controller.js";

const router = express.Router();

router.get("/", getAllRespuestas);
router.get("/:id", getRespuesta);
router.post("/", createRespuesta);
router.put("/:id", updateRespuesta);
router.delete("/:id", deleteRespuesta);

export default router;
