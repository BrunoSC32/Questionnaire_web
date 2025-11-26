import express from "express";
import {
  getAllExamenes,
  getExamen,
  createExamen,
  updateExamen,
  deleteExamen,
} from "../controllers/examen.controller.js";

const router = express.Router();

router.get("/", getAllExamenes);
router.get("/:id", getExamen);
router.post("/", createExamen);
router.put("/:id", updateExamen);
router.delete("/:id", deleteExamen);

export default router;
