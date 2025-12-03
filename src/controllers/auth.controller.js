import bcrypt from "bcrypt";
import { query } from "../config/db.js";

const ROLES_PERMITIDOS = ["Editor", "Gestor", "Administrador", "Participante"];

export const register = async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, rol } = req.body;

    if (!nombre || !apellido || !correo || !contrasena) {
      return res.status(400).json({
        ok: false,
        message: "Nombre, apellido, correo y contraseña son requeridos",
      });
    }

    const existing = await query(
      "SELECT id_persona FROM persona WHERE correo = $1",
      [correo]
    );

    if (existing.rows.length > 0) {
      return res
        .status(409)
        .json({ ok: false, message: "El correo ya está registrado" });
    }

    const rolFinal = rol || "Participante";

    if (!ROLES_PERMITIDOS.includes(rolFinal)) {
      return res.status(400).json({
        ok: false,
        message:
          "Rol inválido. Roles permitidos: Editor, Gestor, Administrador, Participante",
      });
    }

    const hash = await bcrypt.hash(contrasena, 10);

    const result = await query(
      `INSERT INTO persona (nombre, apellido, correo, contrasena_hash, rol)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id_persona, nombre, apellido, correo, rol`,
      [nombre, apellido, correo, hash, rolFinal]
    );

    const persona = result.rows[0];

    req.session.user = {
      id_persona: persona.id_persona,
      nombre: persona.nombre,
      apellido: persona.apellido,
      correo: persona.correo,
      rol: persona.rol,
    };

    return res.status(201).json({ ok: true, user: req.session.user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, message: "Error en el servidor" });
  }
};

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
