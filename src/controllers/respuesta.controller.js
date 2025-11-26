import { RespuestaModel } from "../models/respuesta.model.js";

export const getAllRespuestas = async (req, res) => {
  try {
    const rows = await RespuestaModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getRespuesta = async (req, res) => {
  try {
    const row = await RespuestaModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createRespuesta = async (req, res) => {
  try {
    const created = await RespuestaModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateRespuesta = async (req, res) => {
  try {
    const updated = await RespuestaModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteRespuesta = async (req, res) => {
  try {
    await RespuestaModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
