import express from "express";
import {
  getAllEditors,
  getEditor,
  createEditor,
  updateEditor,
  deleteEditor,
} from "../controllers/editor.controller.js";

const router = express.Router();

router.get("/", getAllEditors);
router.get("/:id", getEditor);
router.post("/", createEditor);
router.put("/:id", updateEditor);
router.delete("/:id", deleteEditor);

export default router;
