import express from "express";
import {
  getAllDificultades,
  getDificultad,
  createDificultad,
  updateDificultad,
  deleteDificultad,
} from "../controllers/dificultad.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Dificultad:
 *       type: object
 *       properties:
 *         id_dificultad:
 *           type: integer
 *           description: Identificador interno.
 *         nivel:
 *           type: string
 *           description: Etiqueta del nivel (Básico, Intermedio, etc.).
 *         descripcion:
 *           type: string
 *           description: Explicación del nivel de dificultad.
 *       required:
 *         - nivel
 *         - descripcion
 *       example:
 *         id_dificultad: 2
 *         nivel: Intermedio
 *         descripcion: Requiere aplicar varias habilidades y análisis.
 * tags:
 *   - name: Dificultades
 *     description: Catálogo de niveles de dificultad para preguntas.
 */

/**
 * @swagger
 * /dificultades:
 *   get:
 *     summary: Lista todos los niveles de dificultad.
 *     tags: [Dificultades]
 *     security:
 *       - sessionAuth: []
 *     responses:
 *       200:
 *         description: Lista de registros.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Dificultad'
 *   post:
 *     summary: Crea un nivel de dificultad.
 *     tags: [Dificultades]
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dificultad'
 *     responses:
 *       201:
 *         description: Registro creado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Dificultad'
 */
router.get("/", isAuthenticated, getAllDificultades);
router.get("/:id", isAuthenticated, getDificultad);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  createDificultad
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  updateDificultad
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  deleteDificultad
);

/**
 * @swagger
 * /dificultades/{id}:
 *   get:
 *     summary: Obtiene un nivel de dificultad.
 *     tags: [Dificultades]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dificultad.
 *     responses:
 *       200:
 *         description: Registro encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Dificultad'
 *       404:
 *         description: No se encontró el registro.
 *   put:
 *     summary: Actualiza un nivel de dificultad.
 *     tags: [Dificultades]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dificultad.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dificultad'
 *     responses:
 *       200:
 *         description: Registro actualizado.
 *   delete:
 *     summary: Elimina un nivel de dificultad.
 *     tags: [Dificultades]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dificultad.
 *     responses:
 *       200:
 *         description: Registro eliminado.
 */

export default router;
