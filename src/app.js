
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";
import preguntaRoutes from "./routes/pregunta.routes.js";
import tipoPreguntaRoutes from "./routes/tipo_pregunta.routes.js";
import estadoPreguntaRoutes from "./routes/estado_pregunta.routes.js";
import dificultadRoutes from "./routes/dificultad.routes.js";
import categoriaEdadRoutes from "./routes/categoria_edad.routes.js";
import clasificacionRoutes from "./routes/clasificacion.routes.js";
import personaRoutes from "./routes/persona.routes.js";
import editorRoutes from "./routes/editor.routes.js";
import gestorRoutes from "./routes/gestor.routes.js";
import administradorRoutes from "./routes/administrador.routes.js";
import participanteRoutes from "./routes/participante.routes.js";
import cicloRoutes from "./routes/ciclo.routes.js";
import respuestaRoutes from "./routes/respuesta.routes.js";
import mapaDificultadRoutes from "./routes/mapa_dificultad.routes.js";
import examenRoutes from "./routes/examen.routes.js";
import examenPreguntaRoutes from "./routes/examen_pregunta.routes.js";
import respuestaParticipanteRoutes from "./routes/respuesta_participante.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { swaggerSpec, swaggerUiMiddleware } from "./config/swagger.js";
import sessionMiddleware from "./config/session.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.use("/docs", swaggerUiMiddleware.serve, swaggerUiMiddleware.setup(swaggerSpec));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));

// Rutas API
app.use("/api/auth", authRoutes);
app.use("/api", indexRoutes);
app.use("/api/preguntas", preguntaRoutes);
app.use("/api/tipo_preguntas", tipoPreguntaRoutes);
app.use("/api/estado_preguntas", estadoPreguntaRoutes);
app.use("/api/dificultades", dificultadRoutes);
app.use("/api/categorias_edad", categoriaEdadRoutes);
app.use("/api/clasificaciones", clasificacionRoutes);
app.use("/api/personas", personaRoutes);
app.use("/api/editors", editorRoutes);
app.use("/api/gestores", gestorRoutes);
app.use("/api/administradores", administradorRoutes);
app.use("/api/participantes", participanteRoutes);
app.use("/api/ciclos", cicloRoutes);
app.use("/api/respuestas", respuestaRoutes);
app.use("/api/mapa_dificultad", mapaDificultadRoutes);
app.use("/api/examenes", examenRoutes);
app.use("/api/examen_preguntas", examenPreguntaRoutes);
app.use("/api/respuestas_participante", respuestaParticipanteRoutes);

export default app;
