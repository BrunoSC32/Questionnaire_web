import express from "express";
import {
  getAllAdministradores,
  getAdministrador,
  createAdministrador,
  updateAdministrador,
  deleteAdministrador,
} from "../controllers/administrador.controller.js";

const router = express.Router();

router.get("/", getAllAdministradores);
router.get("/:id", getAdministrador);
router.post("/", createAdministrador);
router.put("/:id", updateAdministrador);
router.delete("/:id", deleteAdministrador);

export default router;
