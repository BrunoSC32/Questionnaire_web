import { ExamenPreguntaModel } from "../models/examen_pregunta.model.js";

export const getAllExamenPreguntas = async (req, res) => {
  try {
    const rows = await ExamenPreguntaModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getExamenPregunta = async (req, res) => {
  try {
    const row = await ExamenPreguntaModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createExamenPregunta = async (req, res) => {
  try {
    const created = await ExamenPreguntaModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateExamenPregunta = async (req, res) => {
  try {
    const updated = await ExamenPreguntaModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteExamenPregunta = async (req, res) => {
  try {
    await ExamenPreguntaModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
