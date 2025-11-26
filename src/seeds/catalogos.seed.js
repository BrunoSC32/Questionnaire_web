// src/seeds/catalogs.seed.js
import pool, { query } from "../config/db.js";

const catalogs = [
  {
    table: "tipo_pregunta",
    columns: ["nombre", "descripcion"],
    rows: [
      ["Opción múltiple", "Seleccionar una o varias alternativas correctas."],
      ["Verdadero o falso", "Elegir entre las opciones verdadero o falso."],
      ["Respuesta abierta", "Responder con un texto libre."],
      ["Relación de columnas", "Relacionar elementos de dos listas."],
      ["Ordenar secuencia", "Ordenar elementos en una secuencia lógica."],
    ],
  },

  {
    table: "estado_pregunta",
    columns: ["nombre", "descripcion"],
    rows: [
      ["Borrador", "Pregunta en edición, aún no visible en exámenes."],
      ["Pendiente de revisión", "Lista para revisión por parte de un editor."],
      ["Aprobada", "Validada para uso en exámenes."],
      ["Publicada", "Actualmente en uso en exámenes activos."],
      ["Archivada", "No se usa, pero se conserva para referencia."],
    ],
  },

  {
    table: "dificultad",
    columns: ["nivel", "descripcion"],
    rows: [
      ["Fácil", "Ejercicios introductorios o de aplicación directa."],
      ["Media", "Requiere combinar varios conceptos o pasos."],
      ["Difícil", "Problemas complejos con alto nivel de análisis."],
    ],
  },

  {
    table: "categoria_edad",
    columns: ["edad_min", "edad_max", "descripcion"],
    rows: [
      [6, 8, "Primaria inferior"],
      [9, 12, "Primaria superior"],
      [13, 15, "Secundaria básica"],
      [16, 18, "Bachillerato / Media superior"],
      [19, 99, "Adultos"],
    ],
  },

  {
    table: "clasificacion",
    columns: ["nombre", "subarea", "descripcion"],
    rows: [
      ["Matemáticas", "Álgebra", "Operaciones, ecuaciones, expresiones algebraicas."],
      ["Matemáticas", "Geometría", "Figuras, ángulos, áreas, volúmenes."],
      ["Ciencias", "Biología", "Seres vivos, ecosistemas, anatomía básica."],
      ["Ciencias", "Física", "Movimiento, fuerzas, energía, ondas."],
      ["Lenguaje", "Comprensión lectora", "Interpretación y análisis de textos."],
    ],
  },
];

const buildPlaceholders = (length) =>
  Array.from({ length }, (_, idx) => `$${idx + 1}`).join(",");

const seedCatalogs = async () => {
  console.log("Iniciando seed de catálogos...");

  try {
   
    await query("BEGIN");

    
    const tables = catalogs.map((c) => c.table).join(", ");
    console.log(`→ Limpiando tablas: ${tables}`);
    await query(`TRUNCATE TABLE ${tables} RESTART IDENTITY CASCADE`);

    
    for (const { table, columns, rows } of catalogs) {
      console.log(`→ Poblando tabla ${table}...`);

      for (const row of rows) {
        const placeholders = buildPlaceholders(row.length);
        await query(
          `INSERT INTO ${table} (${columns.join(",")})
           VALUES (${placeholders})`,
          row
        );
      }
    }

    await query("COMMIT");
    console.log("Seed de catálogos completado.");
  } catch (error) {
    await query("ROLLBACK");
    console.error("Error durante el seed:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

seedCatalogs();
