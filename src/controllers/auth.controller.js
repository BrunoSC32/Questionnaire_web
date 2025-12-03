import bcrypt from "bcrypt";
import { query } from "../config/db.js";

export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
      return res
        .status(400)
        .json({ ok: false, message: "Correo y contraseña son requeridos" });
    }

    const result = await query(
      "SELECT id_persona, nombre, apellido, correo, contrasena_hash, rol FROM persona WHERE correo = $1",
      [correo]
    );

    const persona = result.rows[0];

    if (!persona) {
      return res
        .status(401)
        .json({ ok: false, message: "Credenciales inválidas" });
    }

    const isMatch = await bcrypt.compare(
      contrasena,
      persona.contrasena_hash || ""
    );

    if (!isMatch) {
      return res
        .status(401)
        .json({ ok: false, message: "Credenciales inválidas" });
    }

    req.session.user = {
      id_persona: persona.id_persona,
      nombre: persona.nombre,
      apellido: persona.apellido,
      correo: persona.correo,
      rol: persona.rol,
    };

    return res.json({ ok: true, user: req.session.user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Error en el servidor" });
  }
};

export const logout = (req, res) => {
  if (!req.session) {
    return res.json({ ok: true });
  }

  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ ok: false, message: "No se pudo cerrar sesión" });
    }

    res.clearCookie("connect.sid");
    return res.json({ ok: true });
  });
};

export const me = (req, res) => {
  if (!req.session || !req.session.user) {
    return res.status(401).json({ ok: false, message: "No autenticado" });
  }

  return res.json({ ok: true, user: req.session.user });
};

