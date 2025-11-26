import express from "express";
import {
  getAllDificultades,
  getDificultad,
  createDificultad,
  updateDificultad,
  deleteDificultad,
} from "../controllers/dificultad.controller.js";

const router = express.Router();

router.get("/", getAllDificultades);
router.get("/:id", getDificultad);
router.post("/", createDificultad);
router.put("/:id", updateDificultad);
router.delete("/:id", deleteDificultad);

export default router;
