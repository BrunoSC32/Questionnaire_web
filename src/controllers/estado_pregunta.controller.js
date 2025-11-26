import { EstadoPreguntaModel } from "../models/estado_pregunta.model.js";

export const getAllEstadoPreguntas = async (req, res) => {
  try {
    const rows = await EstadoPreguntaModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getEstadoPregunta = async (req, res) => {
  try {
    const row = await EstadoPreguntaModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createEstadoPregunta = async (req, res) => {
  try {
    const created = await EstadoPreguntaModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateEstadoPregunta = async (req, res) => {
  try {
    const updated = await EstadoPreguntaModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteEstadoPregunta = async (req, res) => {
  try {
    await EstadoPreguntaModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
