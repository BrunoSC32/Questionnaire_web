// src/routes/index.routes.js
import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ ok: true, message: "API funcionando con ESM" });
});

export default router;