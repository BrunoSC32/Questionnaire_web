import { BaseModel } from "./base.model.js";

const TABLE = "examen_pregunta";
const ID = "id_examen_pregunta";
const FIELDS = ["id_examen", "id_pregunta", "orden"];

export const ExamenPreguntaModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
