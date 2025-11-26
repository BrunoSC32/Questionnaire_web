import { BaseModel } from "./base.model.js";

const TABLE = "mapa_dificultad";
const ID = "id_mapeo";
const FIELDS = [
  "id_pregunta",
  "id_categoria_edad",
  "id_dificultad_asignada",
  "id_dificultad_base",
  "editable_por_editor",

];

export const MapaDificultadModel = {
  findAll: () => BaseModel.findAll(TABLE),
  findById: (id) => BaseModel.findById(TABLE, ID, id),
  create: (data) => BaseModel.create(TABLE, FIELDS, FIELDS.map((f) => data[f])),
  update: (id, data) =>
    BaseModel.update(TABLE, ID, id, FIELDS, FIELDS.map((f) => data[f])),
  remove: (id) => BaseModel.remove(TABLE, ID, id),
};
