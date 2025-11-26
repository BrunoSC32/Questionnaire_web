import express from "express";
import {
  getAllCategoriasEdad,
  getCategoriaEdad,
  createCategoriaEdad,
  updateCategoriaEdad,
  deleteCategoriaEdad,
} from "../controllers/categoria_edad.controller.js";

const router = express.Router();

router.get("/", getAllCategoriasEdad);
router.get("/:id", getCategoriaEdad);
router.post("/", createCategoriaEdad);
router.put("/:id", updateCategoriaEdad);
router.delete("/:id", deleteCategoriaEdad);

export default router;
