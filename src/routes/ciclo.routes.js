import express from "express";
import {
  getAllCiclos,
  getCiclo,
  createCiclo,
  updateCiclo,
  deleteCiclo,
} from "../controllers/ciclo.controller.js";

const router = express.Router();

router.get("/", getAllCiclos);
router.get("/:id", getCiclo);
router.post("/", createCiclo);
router.put("/:id", updateCiclo);
router.delete("/:id", deleteCiclo);

export default router;
