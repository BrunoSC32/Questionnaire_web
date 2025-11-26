import { AdministradorModel } from "../models/administrador.model.js";

export const getAllAdministradores = async (req, res) => {
  try {
    const rows = await AdministradorModel.findAll();
    res.json({ ok: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const getAdministrador = async (req, res) => {
  try {
    const row = await AdministradorModel.findById(req.params.id);
    if (!row) return res.status(404).json({ ok: false });
    res.json({ ok: true, data: row });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const createAdministrador = async (req, res) => {
  try {
    const created = await AdministradorModel.create(req.body);
    res.status(201).json({ ok: true, data: created });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const updateAdministrador = async (req, res) => {
  try {
    const updated = await AdministradorModel.update(req.params.id, req.body);
    res.json({ ok: true, data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};

export const deleteAdministrador = async (req, res) => {
  try {
    await AdministradorModel.remove(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
};
