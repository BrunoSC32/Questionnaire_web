import { BaseModel } from "./base.model.js";

const TABLE = "respuesta";
const ID = "id_respuesta";
const FIELDS = ["texto_respuesta", "es_correcta", "explicacion", "id_pregunta"];

export const RespuestaModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
