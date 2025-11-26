import { BaseModel } from "./base.model.js";

const TABLE = "categoria_edad";
const ID = "id_categoria_edad";
const FIELDS = ["edad_min", "edad_max", "descripcion"];

export const CategoriaEdadModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
