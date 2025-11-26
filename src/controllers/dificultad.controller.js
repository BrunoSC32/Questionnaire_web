import { DificultadModel } from "../models/dificultad.model.js";

export const getAllDificultades = async (req, res) => {
  try {
    const rows = await DificultadModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getDificultad = async (req, res) => {
  try {
    const row = await DificultadModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createDificultad = async (req, res) => {
  try {
    const created = await DificultadModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateDificultad = async (req, res) => {
  try {
    const updated = await DificultadModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteDificultad = async (req, res) => {
  try {
    await DificultadModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
