import express from "express";
import {
  getAllClasificaciones,
  getClasificacion,
  createClasificacion,
  updateClasificacion,
  deleteClasificacion,
} from "../controllers/clasificacion.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Clasificacion:
 *       type: object
 *       properties:
 *         id_clasificacion:
 *           type: integer
 *           description: Identificador interno.
 *         nombre:
 *           type: string
 *           description: Área principal (Matemáticas, Ciencias, etc.).
 *         subarea:
 *           type: string
 *           description: Subárea o tema específico.
 *       required:
 *         - nombre
 *         - subarea
 *       example:
 *         id_clasificacion: 4
 *         nombre: Ciencias
 *         subarea: Física
 * tags:
 *   - name: Clasificaciones
 *     description: Catálogo de áreas y subáreas temáticas.
 */

/**
 * @swagger
 * /clasificaciones:
 *   get:
 *     summary: Lista todas las clasificaciones.
 *     tags: [Clasificaciones]
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
 *                     $ref: '#/components/schemas/Clasificacion'
 *   post:
 *     summary: Crea una clasificación.
 *     tags: [Clasificaciones]
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clasificacion'
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
 *                   $ref: '#/components/schemas/Clasificacion'
 */
router.get("/", isAuthenticated, getAllClasificaciones);
router.get("/:id", isAuthenticated, getClasificacion);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  createClasificacion
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  updateClasificacion
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador", "Editor"),
  deleteClasificacion
);

/**
 * @swagger
 * /clasificaciones/{id}:
 *   get:
 *     summary: Obtiene una clasificación.
 *     tags: [Clasificaciones]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la clasificación.
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
 *                   $ref: '#/components/schemas/Clasificacion'
 *       404:
 *         description: No se encontró el registro.
 *   put:
 *     summary: Actualiza una clasificación.
 *     tags: [Clasificaciones]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la clasificación.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clasificacion'
 *     responses:
 *       200:
 *         description: Registro actualizado.
 *   delete:
 *     summary: Elimina una clasificación.
 *     tags: [Clasificaciones]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la clasificación.
 *     responses:
 *       200:
 *         description: Registro eliminado.
 */

export default router;
