import express from "express";
import {
  getAllGestores,
  getGestor,
  createGestor,
  updateGestor,
  deleteGestor,
} from "../controllers/gestor.controller.js";

const router = express.Router();

router.get("/", getAllGestores);
router.get("/:id", getGestor);
router.post("/", createGestor);
router.put("/:id", updateGestor);
router.delete("/:id", deleteGestor);

export default router;
