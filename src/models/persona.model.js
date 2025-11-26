import { BaseModel } from "./base.model.js";

const TABLE = "persona";
const ID = "id_persona";
const FIELDS = ["nombre", "apellido", "correo", "contrasena_hash", "rol"];

export const PersonaModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
