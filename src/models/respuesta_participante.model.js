import { BaseModel } from "./base.model.js";

const TABLE = "respuesta_participante";
const ID = "id_respuesta_participante";
const FIELDS = [
  "id_participante",
  "id_examen",
  "id_pregunta",
  "id_respuesta",
  "respuesta_texto",
  "puntaje_obtenido",
  "fecha_respuesta",
];

export const RespuestaParticipanteModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
