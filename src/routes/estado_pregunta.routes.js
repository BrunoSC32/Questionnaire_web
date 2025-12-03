import express from "express";
import {
  getAllEstadoPreguntas,
  getEstadoPregunta,
  createEstadoPregunta,
  updateEstadoPregunta,
  deleteEstadoPregunta,
} from "../controllers/estado_pregunta.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     EstadoPregunta:
 *       type: object
 *       properties:
 *         id_estado_pregunta:
 *           type: integer
 *           description: Identificador interno.
 *         nombre:
 *           type: string
 *           description: Estado asignado a la pregunta.
 *       required:
 *         - nombre
 *       example:
 *         id_estado_pregunta: 1
 *         nombre: Aprobada
 * tags:
 *   - name: EstadoPreguntas
 *     description: Catálogo de estados posibles para las preguntas.
 */

/**
 * @swagger
 * /estado_preguntas:
 *   get:
 *     summary: Lista todos los estados de pregunta.
 *     tags: [EstadoPreguntas]
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
 *                     $ref: '#/components/schemas/EstadoPregunta'
 *   post:
 *     summary: Crea un estado de pregunta.
 *     tags: [EstadoPreguntas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EstadoPregunta'
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
 *                   $ref: '#/components/schemas/EstadoPregunta'
 */
router.get("/", getAllEstadoPreguntas);
router.get("/:id", getEstadoPregunta);
router.post("/", createEstadoPregunta);
router.put("/:id", updateEstadoPregunta);
router.delete("/:id", deleteEstadoPregunta);

/**
 * @swagger
 * /estado_preguntas/{id}:
 *   get:
 *     summary: Obtiene un estado de pregunta.
 *     tags: [EstadoPreguntas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado.
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
 *                   $ref: '#/components/schemas/EstadoPregunta'
 *       404:
 *         description: No se encontró el registro.
 *   put:
 *     summary: Actualiza un estado de pregunta.
 *     tags: [EstadoPreguntas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EstadoPregunta'
 *     responses:
 *       200:
 *         description: Registro actualizado.
 *   delete:
 *     summary: Elimina un estado de pregunta.
 *     tags: [EstadoPreguntas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del estado.
 *     responses:
 *       200:
 *         description: Registro eliminado.
 */

export default router;
