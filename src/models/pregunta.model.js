import { query } from "../config/db.js";

export const PreguntaModel = {
  async crear(datos) {
    const sql = `
      INSERT INTO pregunta (
        enunciado,
        id_tipo_pregunta,
        id_estado_pregunta,
        id_categoria_edad,
        id_dificultad,
        id_clasificacion,
        id_editor_creador,
        explicacion_solucion,
        razon_area,
        fecha_publicacion
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *;
    `;

    const params = [
      datos.enunciado,
      datos.id_tipo_pregunta,
      datos.id_estado_pregunta,
      datos.id_categoria_edad,
      datos.id_dificultad,
      datos.id_clasificacion,
      datos.id_editor_creador,
      datos.explicacion_solucion,
      datos.razon_area,
      datos.fecha_publicacion,
    ];

    const result = await query(sql, params);
    return result.rows[0];
  }
};
