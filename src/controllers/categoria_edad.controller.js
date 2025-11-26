import { CategoriaEdadModel } from "../models/categoria_edad.model.js";

export const getAllCategoriasEdad = async (req, res) => {
  try {
    const rows = await CategoriaEdadModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getCategoriaEdad = async (req, res) => {
  try {
    const row = await CategoriaEdadModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createCategoriaEdad = async (req, res) => {
  try {
    const created = await CategoriaEdadModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateCategoriaEdad = async (req, res) => {
  try {
    const updated = await CategoriaEdadModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteCategoriaEdad = async (req, res) => {
  try {
    await CategoriaEdadModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
