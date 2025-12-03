import express from "express";
import {
  getAllTipoPreguntas,
  getTipoPregunta,
  createTipoPregunta,
  updateTipoPregunta,
  deleteTipoPregunta,
} from "../controllers/tipo_pregunta.controller.js";

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
router.get("/", getAllTipoPreguntas);
router.get("/:id", getTipoPregunta);
router.post("/", createTipoPregunta);
router.put("/:id", updateTipoPregunta);
router.delete("/:id", deleteTipoPregunta);

/**
 * @swagger
 * /tipo_preguntas/{id}:
 *   get:
 *     summary: Obtiene un tipo de pregunta.
 *     tags: [TipoPreguntas]
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
