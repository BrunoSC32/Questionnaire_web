import { CicloModel } from "../models/ciclo.model.js";

export const getAllCiclos = async (req, res) => {
  try {
    const rows = await CicloModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getCiclo = async (req, res) => {
  try {
    const row = await CicloModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createCiclo = async (req, res) => {
  try {
    const created = await CicloModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateCiclo = async (req, res) => {
  try {
    const updated = await CicloModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteCiclo = async (req, res) => {
  try {
    await CicloModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
