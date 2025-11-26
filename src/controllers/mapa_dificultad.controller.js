import { MapaDificultadModel } from "../models/mapa_dificultad.model.js";

export const getAllMapas = async (req, res) => {
  try {
    const rows = await MapaDificultadModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getMapa = async (req, res) => {
  try {
    const row = await MapaDificultadModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createMapa = async (req, res) => {
  try {
    const created = await MapaDificultadModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateMapa = async (req, res) => {
  try {
    const updated = await MapaDificultadModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteMapa = async (req, res) => {
  try {
    await MapaDificultadModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
