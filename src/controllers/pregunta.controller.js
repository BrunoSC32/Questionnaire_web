import { PreguntaModel } from "../models/pregunta.model.js";

export const crearPregunta = async (req, res) => {
  try {
    const nueva = await PreguntaModel.crear(req.body);
    res.status(201).json({ ok: true, pregunta: nueva });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      message: "Error al crear la pregunta"
    });
  }
};
