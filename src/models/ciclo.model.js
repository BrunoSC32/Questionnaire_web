import { BaseModel } from "./base.model.js";

const TABLE = "ciclo";
const ID = "id_ciclo";
const FIELDS = ["nombre", "fecha_inicio", "fecha_fin", "estado"];

export const CicloModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
