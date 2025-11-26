import { BaseModel } from "./base.model.js";

const TABLE = "participante";
const ID = "id_participante";
const FIELDS = ["id_participante", "edad", "categoria_asignada"];

export const ParticipanteModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
