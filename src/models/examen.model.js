import { BaseModel } from "./base.model.js";

const TABLE = "examen";
const ID = "id_examen";
const FIELDS = [
  "titulo",
  "descripcion",
  "fecha_inicio",
  "fecha_fin",
  "id_gestor",
  "id_ciclo",
];

export const ExamenModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
