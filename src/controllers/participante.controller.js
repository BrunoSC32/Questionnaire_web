import { ParticipanteModel } from "../models/participante.model.js";

export const getAllParticipantes = async (req, res) => {
  try {
    const rows = await ParticipanteModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getParticipante = async (req, res) => {
  try {
    const row = await ParticipanteModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createParticipante = async (req, res) => {
  try {
    const created = await ParticipanteModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateParticipante = async (req, res) => {
  try {
    const updated = await ParticipanteModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteParticipante = async (req, res) => {
  try {
    await ParticipanteModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
