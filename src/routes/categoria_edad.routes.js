import express from "express";
import {
  getAllCategoriasEdad,
  getCategoriaEdad,
  createCategoriaEdad,
  updateCategoriaEdad,
  deleteCategoriaEdad,
} from "../controllers/categoria_edad.controller.js";
import {
  isAuthenticated,
  hasRole,
} from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CategoriaEdad:
 *       type: object
 *       properties:
 *         id_categoria_edad:
 *           type: integer
 *           description: Identificador interno.
 *         edad_min:
 *           type: integer
 *           description: Edad mínima (inclusive).
 *         edad_max:
 *           type: integer
 *           description: Edad máxima (inclusive).
 *         descripcion:
 *           type: string
 *           description: Descripción de la categoría.
 *       required:
 *         - edad_min
 *         - edad_max
 *         - descripcion
 *       example:
 *         id_categoria_edad: 3
 *         edad_min: 13
 *         edad_max: 15
 *         descripcion: Secundaria básica
 * tags:
 *   - name: CategoriasEdad
 *     description: Rangos de edad para clasificar a los participantes.
 */

/**
 * @swagger
 * /categorias_edad:
 *   get:
 *     summary: Lista todas las categorías de edad.
 *     tags: [CategoriasEdad]
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
 *                     $ref: '#/components/schemas/CategoriaEdad'
 *   post:
 *     summary: Crea una categoría de edad.
 *     tags: [CategoriasEdad]
 *     security:
 *       - sessionAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoriaEdad'
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
 *                   $ref: '#/components/schemas/CategoriaEdad'
 */
router.get("/", isAuthenticated, getAllCategoriasEdad);
router.get("/:id", isAuthenticated, getCategoriaEdad);
router.post(
  "/",
  isAuthenticated,
  hasRole("Administrador"),
  createCategoriaEdad
);
router.put(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  updateCategoriaEdad
);
router.delete(
  "/:id",
  isAuthenticated,
  hasRole("Administrador"),
  deleteCategoriaEdad
);

/**
 * @swagger
 * /categorias_edad/{id}:
 *   get:
 *     summary: Obtiene una categoría de edad.
 *     tags: [CategoriasEdad]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría.
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
 *                   $ref: '#/components/schemas/CategoriaEdad'
 *       404:
 *         description: No se encontró el registro.
 *   put:
 *     summary: Actualiza una categoría de edad.
 *     tags: [CategoriasEdad]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CategoriaEdad'
 *     responses:
 *       200:
 *         description: Registro actualizado.
 *   delete:
 *     summary: Elimina una categoría de edad.
 *     tags: [CategoriasEdad]
 *     security:
 *       - sessionAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la categoría.
 *     responses:
 *       200:
 *         description: Registro eliminado.
 */

export default router;
