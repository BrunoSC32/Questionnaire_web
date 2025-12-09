import express from "express";
import {
  getAllTipoPreguntas,
  getTipoPregunta,
  createTipoPregunta,
  updateTipoPregunta,
  deleteTipoPregunta,
} from "../controllers/tipo_pregunta.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoPregunta:
 *       type: object
 *       properties:
 *         id_tipo_pregunta:
 *           type: integer
 *           description: Identificador interno.
 *         nombre:
 *           type: string
 *           description: Nombre del tipo de pregunta.
 *       required:
 *         - nombre
 *       example:
 *         id_tipo_pregunta: 1
 *         nombre: Opción múltiple
 * tags:
 *   - name: TipoPreguntas
 *     description: Catálogo de tipos de preguntas.
 */

/**
 * @swagger
 * /tipo_preguntas:
 *   get:
 *     summary: Lista todos los tipos de pregunta.
 *     tags: [TipoPreguntas]
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
 *                     $ref: '#/components/schemas/TipoPregunta'
 *   post:
 *     summary: Crea un tipo de pregunta.
 *     tags: [TipoPreguntas]
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPregunta'
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
 *                   $ref: '#/components/schemas/TipoPregunta'
 */
router.get("/", isAuthenticated, getAllTipoPreguntas);
router.get("/:id", isAuthenticated, getTipoPregunta);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  createTipoPregunta
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  updateTipoPregunta
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  deleteTipoPregunta
);

/**
 * @swagger
 * /tipo_preguntas/{id}:
 *   get:
 *     summary: Obtiene un tipo de pregunta.
 *     tags: [TipoPreguntas]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de pregunta.
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
 *                   $ref: '#/components/schemas/TipoPregunta'
 *       404:
 *         description: No se encontró el registro.
 *   put:
 *     summary: Actualiza un tipo de pregunta.
 *     tags: [TipoPreguntas]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de pregunta.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoPregunta'
 *     responses:
 *       200:
 *         description: Registro actualizado.
 *   delete:
 *     summary: Elimina un tipo de pregunta.
 *     tags: [TipoPreguntas]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del tipo de pregunta.
 *     responses:
 *       200:
 *         description: Registro eliminado.
 */

export default router;
