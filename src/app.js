
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import preguntaRoutes from "./routes/pregunta.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));

// Rutas API
app.use("/api", indexRoutes);
app.use("/api/preguntas", preguntaRoutes);

export default app;
