import { PersonaModel } from "../models/persona.model.js";

export const getAllPersonas = async (req, res) => {
  try {
    const rows = await PersonaModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getPersona = async (req, res) => {
  try {
    const row = await PersonaModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createPersona = async (req, res) => {
  try {
    const created = await PersonaModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updatePersona = async (req, res) => {
  try {
    const updated = await PersonaModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deletePersona = async (req, res) => {
  try {
    await PersonaModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
