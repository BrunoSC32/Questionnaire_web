import { RespuestaParticipanteModel } from "../models/respuesta_participante.model.js";

export const getAllRespuestasParticipante = async (req, res) => {
  try {
    const rows = await RespuestaParticipanteModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getRespuestaParticipante = async (req, res) => {
  try {
    const row = await RespuestaParticipanteModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createRespuestaParticipante = async (req, res) => {
  try {
    const created = await RespuestaParticipanteModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateRespuestaParticipante = async (req, res) => {
  try {
    const updated = await RespuestaParticipanteModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteRespuestaParticipante = async (req, res) => {
  try {
    await RespuestaParticipanteModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
