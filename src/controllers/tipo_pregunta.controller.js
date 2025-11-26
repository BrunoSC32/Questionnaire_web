import { TipoPreguntaModel } from "../models/tipo_pregunta.model.js";

export const getAllTipoPreguntas = async (req, res) => {
  try {
    const rows = await TipoPreguntaModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error fetching tipo_pregunta" });
  }
};

export const getTipoPregunta = async (req, res) => {
  try {
    const row = await TipoPreguntaModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error fetching tipo_pregunta" });
  }
};

export const createTipoPregunta = async (req, res) => {
  try {
    const created = await TipoPreguntaModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error creating tipo_pregunta" });
  }
};

export const updateTipoPregunta = async (req, res) => {
  try {
    const updated = await TipoPreguntaModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error updating tipo_pregunta" });
  }
};

export const deleteTipoPregunta = async (req, res) => {
  try {
    await TipoPreguntaModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error deleting tipo_pregunta" });
  }
};
