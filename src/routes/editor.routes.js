import express from "express";
import {
  getAllEditors,
  getEditor,
  createEditor,
  updateEditor,
  deleteEditor,
} from "../controllers/editor.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", isAuthenticated, hasRole("Administrador"), getAllEditors);
router.get("/:id", isAuthenticated, hasRole("Administrador"), getEditor);
router.post("/", isAuthenticated, hasRole("Administrador"), createEditor);
router.put("/:id", isAuthenticated, hasRole("Administrador"), updateEditor);
router.delete("/:id", isAuthenticated, hasRole("Administrador"), deleteEditor);

export default router;
