// src/seeds/all_data.seed.js
import pool, { query } from "../config/db.js";

const buildPlaceholders = (length) =>
  Array.from({ length }, (_, idx) => `$${idx + 1}`).join(",");

const seedAllData = async () => {
  console.log("Iniciando seed completo de todas las tablas...");

  try {
    await query("BEGIN");

    // 1. TRUNCATE (en orden inverso de dependencias)
    const truncateOrder = [
      "respuesta_participante",
      "respuesta",
      "examen_pregunta",
      "mapa_dificultad",
      "pregunta",
      "participante",
      "editor",
      "gestor",
      "administrador",
      "examen",
      "ciclo",
      "clasificacion",
      "categoria_edad",
      "dificultad",
      "estado_pregunta",
      "tipo_pregunta",
      "persona",
    ];

    for (const table of truncateOrder) {
      console.log(`→ Limpiando tabla ${table}...`);
      await query(`TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE`);
    }

    // ============= CATÁLOGOS (sin FK) =============

    console.log("\n=== Insertando CATÁLOGOS ===");

    // tipo_pregunta
    console.log("→ Poblando tipo_pregunta...");
    const tiposData = [
      ["Opción múltiple", "Seleccionar una o varias alternativas correctas."],
      ["Verdadero o falso", "Elegir entre las opciones verdadero o falso."],
      ["Respuesta abierta", "Responder con un texto libre."],
      ["Relación de columnas", "Relacionar elementos de dos listas."],
      ["Ordenar secuencia", "Ordenar elementos en una secuencia lógica."],
    ];
    for (const row of tiposData) {
      await query(
        `INSERT INTO tipo_pregunta (nombre, descripcion) VALUES ($1, $2)`,
        row
      );
    }

    // estado_pregunta
    console.log("→ Poblando estado_pregunta...");
    const estadosData = [
      ["Borrador", "Pregunta en edición, aún no visible en exámenes."],
      ["Pendiente de revisión", "Lista para revisión por parte de un editor."],
      ["Aprobada", "Validada para uso en exámenes."],
      ["Publicada", "Actualmente en uso en exámenes activos."],
      ["Archivada", "No se usa, pero se conserva para referencia."],
    ];
    for (const row of estadosData) {
      await query(
        `INSERT INTO estado_pregunta (nombre, descripcion) VALUES ($1, $2)`,
        row
      );
    }

    // dificultad
    console.log("→ Poblando dificultad...");
    const dificultadesData = [
      ["Fácil", "Ejercicios introductorios o de aplicación directa."],
      ["Media", "Requiere combinar varios conceptos o pasos."],
      ["Difícil", "Problemas complejos con alto nivel de análisis."],
    ];
    for (const row of dificultadesData) {
      await query(
        `INSERT INTO dificultad (nivel, descripcion) VALUES ($1, $2)`,
        row
      );
    }

    // categoria_edad
    console.log("→ Poblando categoria_edad...");
    const categoriasData = [
      [6, 8, "Primaria inferior"],
      [9, 12, "Primaria superior"],
      [13, 15, "Secundaria básica"],
      [16, 18, "Bachillerato / Media superior"],
      [19, 99, "Adultos"],
    ];
    for (const row of categoriasData) {
      await query(
        `INSERT INTO categoria_edad (edad_min, edad_max, descripcion) VALUES ($1, $2, $3)`,
        row
      );
    }

    // clasificacion
    console.log("→ Poblando clasificacion...");
    const clasificacionesData = [
      ["Matemáticas", "Álgebra", "Operaciones, ecuaciones, expresiones algebraicas."],
      ["Matemáticas", "Geometría", "Figuras, ángulos, áreas, volúmenes."],
      ["Ciencias", "Biología", "Seres vivos, ecosistemas, anatomía básica."],
      ["Ciencias", "Física", "Movimiento, fuerzas, energía, ondas."],
      ["Lenguaje", "Comprensión lectora", "Interpretación y análisis de textos."],
      ["Lenguaje", "Escritura", "Composición, ortografía, puntuación."],
      ["Sociales", "Historia", "Eventos, períodos, contexto histórico."],
      ["Sociales", "Geografía", "Regiones, mapas, demografía."],
    ];
    for (const row of clasificacionesData) {
      await query(
        `INSERT INTO clasificacion (nombre, subarea, descripcion) VALUES ($1, $2, $3)`,
        row
      );
    }

    // ============= PERSONAS Y ROLES =============

    console.log("\n=== Insertando PERSONAS Y ROLES ===");

    // persona
    console.log("→ Poblando persona...");
    const personasData = [
      [
        "Carlos",
        "García",
        "carlos.garcia@example.com",
        "hashed_pass_123",
        "Editor",
      ],
      [
        "María",
        "López",
        "maria.lopez@example.com",
        "hashed_pass_456",
        "Editor",
      ],
      [
        "Juan",
        "Rodríguez",
        "juan.rodriguez@example.com",
        "hashed_pass_789",
        "Gestor",
      ],
      [
        "Ana",
        "Martínez",
        "ana.martinez@example.com",
        "hashed_pass_012",
        "Administrador",
      ],
      [
        "Luis",
        "Fernández",
        "luis.fernandez@example.com",
        "hashed_pass_345",
        "Participante",
      ],
      [
        "Sofia",
        "Ruiz",
        "sofia.ruiz@example.com",
        "hashed_pass_678",
        "Participante",
      ],
      [
        "Pedro",
        "Sánchez",
        "pedro.sanchez@example.com",
        "hashed_pass_901",
        "Participante",
      ],
    ];

    const personaIds = [];
    for (const row of personasData) {
      const result = await query(
        `INSERT INTO persona (nombre, apellido, correo, contrasena_hash, rol)
         VALUES ($1, $2, $3, $4, $5) RETURNING id_persona`,
        row
      );
      personaIds.push(result.rows[0].id_persona);
    }

    // editor (FK a persona)
    console.log("→ Poblando editor...");
    const editoresData = [
      [personaIds[0], "Matemáticas", 5],
      [personaIds[1], "Lenguaje", 3],
    ];
    for (const row of editoresData) {
      await query(
        `INSERT INTO editor (id_editor, especialidad, experiencia_anos)
         VALUES ($1, $2, $3)`,
        row
      );
    }

    // gestor (FK a persona)
    console.log("→ Poblando gestor...");
    const gestoresData = [[personaIds[2], "Educación", "Colegio Central"]];
    for (const row of gestoresData) {
      await query(
        `INSERT INTO gestor (id_gestor, departamento, institucion)
         VALUES ($1, $2, $3)`,
        row
      );
    }

    // administrador (FK a persona)
    console.log("→ Poblando administrador...");
    await query(
      `INSERT INTO administrador (id_admin, permisos_especiales)
       VALUES ($1, $2)`,
      [personaIds[3], '{"crear_usuarios": true, "editar_ciclos": true}']
    );

    // participante (FK a persona y categoria_edad)
    console.log("→ Poblando participante...");
    const participantesData = [
      [personaIds[4], 14, 3],
      [personaIds[5], 16, 4],
      [personaIds[6], 12, 2],
    ];
    for (const row of participantesData) {
      await query(
        `INSERT INTO participante (id_participante, edad, categoria_asignada)
         VALUES ($1, $2, $3)`,
        row
      );
    }

    // ============= CICLOS =============

    console.log("\n=== Insertando CICLOS ===");
    const ciclosData = [
      ["Ciclo 2025-A", "2025-01-15", "2025-06-15", "activo"],
      ["Ciclo 2025-B", "2025-07-01", "2025-12-15", "inactivo"],
      ["Ciclo 2024-A", "2024-01-15", "2024-06-15", "inactivo"],
    ];

    const cicloIds = [];
    for (const row of ciclosData) {
      const result = await query(
        `INSERT INTO ciclo (nombre, fecha_inicio, fecha_fin, estado)
         VALUES ($1, $2, $3, $4) RETURNING id_ciclo`,
        row
      );
      cicloIds.push(result.rows[0].id_ciclo);
    }

    // ============= PREGUNTAS =============

    console.log("\n=== Insertando PREGUNTAS ===");
    const preguntasData = [
      [
        "¿Cuánto es 2 + 2?",
        1,
        3,
        1,
        1,
        1,
        personaIds[0],
        "2 + 2 = 4",
        "Aritmética básica",
        "2025-11-20",
      ],
      [
        "¿Cuál es la capital de Francia?",
        1,
        3,
        1,
        1,
        8,
        personaIds[0],
        "París es la capital de Francia.",
        "Conocimiento geográfico",
        "2025-11-21",
      ],
      [
        "¿Es verdadero que 5 > 3?",
        2,
        3,
        2,
        1,
        1,
        personaIds[1],
        "Verdadero. 5 es mayor que 3.",
        "Comparación de números",
        "2025-11-20",
      ],
      [
        "Explica el proceso de fotosíntesis en plantas.",
        3,
        3,
        3,
        2,
        3,
        personaIds[1],
        "La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar en energía química.",
        "Biología básica",
        "2025-11-19",
      ],
      [
        "Resuelve: x + 5 = 12, ¿cuál es el valor de x?",
        1,
        3,
        3,
        3,
        1,
        personaIds[0],
        "x = 7 (resolviendo: x + 5 = 12 → x = 12 - 5 = 7)",
        "Ecuaciones lineales simples",
        "2025-11-18",
      ],
    ];

    const preguntaIds = [];
    for (const row of preguntasData) {
      const result = await query(
        `INSERT INTO pregunta 
         (enunciado, id_tipo_pregunta, id_estado_pregunta, id_categoria_edad, 
          id_dificultad, id_clasificacion, id_editor_creador, explicacion_solucion, 
          razon_area, fecha_publicacion)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id_pregunta`,
        row
      );
      preguntaIds.push(result.rows[0].id_pregunta);
    }

    // ============= RESPUESTAS =============

    console.log("\n=== Insertando RESPUESTAS ===");
    const respuestasData = [
      // Pregunta 1: ¿Cuánto es 2 + 2?
      [
        "4",
        true,
        "Respuesta correcta.",
        preguntaIds[0],
      ],
      [
        "5",
        false,
        "Incorrecta.",
        preguntaIds[0],
      ],
      // Pregunta 2: ¿Cuál es la capital de Francia?
      [
        "París",
        true,
        "Respuesta correcta.",
        preguntaIds[1],
      ],
      [
        "Lyon",
        false,
        "Lyon es la segunda ciudad más grande, pero no es la capital.",
        preguntaIds[1],
      ],
      // Pregunta 3: ¿Es verdadero que 5 > 3?
      [
        "Verdadero",
        true,
        "Correcto.",
        preguntaIds[2],
      ],
      [
        "Falso",
        false,
        "Incorrecto.",
        preguntaIds[2],
      ],
    ];

    const respuestaIds = [];
    for (const row of respuestasData) {
      const result = await query(
        `INSERT INTO respuesta (texto_respuesta, es_correcta, explicacion, id_pregunta)
         VALUES ($1, $2, $3, $4) RETURNING id_respuesta`,
        row
      );
      respuestaIds.push(result.rows[0].id_respuesta);
    }

    // ============= MAPEO DE DIFICULTAD =============

    console.log("\n=== Insertando MAPA DE DIFICULTAD ===");
    const mapaDificultadData = [
      [preguntaIds[0], 1, 1, 1, false],
      [preguntaIds[0], 2, 1, 1, false],
      [preguntaIds[1], 1, 2, 2, false],
      [preguntaIds[2], 2, 1, 1, true],
      [preguntaIds[3], 3, 2, 2, true],
      [preguntaIds[4], 3, 3, 3, true],
    ];

    for (const row of mapaDificultadData) {
      await query(
        `INSERT INTO mapa_dificultad 
         (id_pregunta, id_categoria_edad, id_dificultad_asignada, id_dificultad_base, editable_por_editor)
         VALUES ($1, $2, $3, $4, $5)`,
        row
      );
    }

    // ============= EXÁMENES =============

    console.log("\n=== Insertando EXÁMENES ===");
    const examenesData = [
      [
        "Examen Matemáticas Básico",
        "Evaluación de operaciones aritméticas básicas",
        "2025-12-01",
        "2025-12-08",
        1,
        cicloIds[0],
      ],
      [
        "Examen Integrado",
        "Prueba que abarca múltiples áreas",
        "2025-12-10",
        "2025-12-17",
        1,
        cicloIds[0],
      ],
    ];

    const examenIds = [];
    for (const row of examenesData) {
      const result = await query(
        `INSERT INTO examen 
         (titulo, descripcion, fecha_inicio, fecha_fin, id_gestor, id_ciclo)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING id_examen`,
        row
      );
      examenIds.push(result.rows[0].id_examen);
    }

    // ============= EXAMEN-PREGUNTA =============

    console.log("\n=== Insertando EXAMEN-PREGUNTA ===");
    const examenPreguntaData = [
      [examenIds[0], preguntaIds[0], 1],
      [examenIds[0], preguntaIds[2], 2],
      [examenIds[0], preguntaIds[4], 3],
      [examenIds[1], preguntaIds[0], 1],
      [examenIds[1], preguntaIds[1], 2],
      [examenIds[1], preguntaIds[2], 3],
      [examenIds[1], preguntaIds[3], 4],
    ];

    for (const row of examenPreguntaData) {
      await query(
        `INSERT INTO examen_pregunta (id_examen, id_pregunta, orden)
         VALUES ($1, $2, $3)`,
        row
      );
    }

    // ============= RESPUESTAS DE PARTICIPANTES =============

    console.log("\n=== Insertando RESPUESTAS DE PARTICIPANTES ===");
    const respuestasParticipanteData = [
      // Participante 1 respondiendo examen 1
      [personaIds[4], examenIds[0], preguntaIds[0], respuestaIds[0], null, 1, "2025-12-01 10:30:00"],
      [personaIds[4], examenIds[0], preguntaIds[2], respuestaIds[4], null, 1, "2025-12-01 10:35:00"],
      [personaIds[4], examenIds[0], preguntaIds[4], null, "x = 7", 1, "2025-12-01 10:40:00"],
      // Participante 2 respondiendo examen 1
      [personaIds[5], examenIds[0], preguntaIds[0], respuestaIds[1], null, 0, "2025-12-01 11:00:00"],
      [personaIds[5], examenIds[0], preguntaIds[2], respuestaIds[5], null, 0, "2025-12-01 11:05:00"],
      // Participante 3 respondiendo examen 2
      [personaIds[6], examenIds[1], preguntaIds[0], respuestaIds[0], null, 1, "2025-12-10 14:00:00"],
      [personaIds[6], examenIds[1], preguntaIds[1], respuestaIds[2], null, 1, "2025-12-10 14:05:00"],
    ];

    for (const row of respuestasParticipanteData) {
      await query(
        `INSERT INTO respuesta_participante 
         (id_participante, id_examen, id_pregunta, id_respuesta, respuesta_texto, puntaje_obtenido, fecha_respuesta)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        row
      );
    }

    await query("COMMIT");
    console.log("\n✓ Seed completo finalizado exitosamente.");
  } catch (error) {
    await query("ROLLBACK");
    console.error("✗ Error durante el seed:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
};

seedAllData();
