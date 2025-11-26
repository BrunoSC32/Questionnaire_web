import { ClasificacionModel } from "../models/clasificacion.model.js";

export const getAllClasificaciones = async (req, res) => {
  try {
    const rows = await ClasificacionModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getClasificacion = async (req, res) => {
  try {
    const row = await ClasificacionModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createClasificacion = async (req, res) => {
  try {
    const created = await ClasificacionModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateClasificacion = async (req, res) => {
  try {
    const updated = await ClasificacionModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteClasificacion = async (req, res) => {
  try {
    await ClasificacionModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
