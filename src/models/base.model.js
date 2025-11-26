import { query } from "../config/db.js";

export const BaseModel = {
  findAll: async (table) => {
    const result = await query(`SELECT * FROM ${table}`);
    return result.rows;
  },

  findById: async (table, idField, id) => {
    const result = await query(
      `SELECT * FROM ${table} WHERE ${idField} = $1`,
      [id]
    );
    return result.rows[0];
  },

  create: async (table, fields, values) => {
    const cols = fields.join(",");
    const params = fields.map((_, i) => `$${i + 1}`).join(",");
    const result = await query(
      `INSERT INTO ${table} (${cols}) VALUES (${params}) RETURNING *`,
      values
    );

    return result.rows[0];
  },

  update: async (table, idField, id, fields, values) => {
    const set = fields.map((f, i) => `${f}=$${i + 1}`).join(",");
    const result = await query(
      `UPDATE ${table} SET ${set} WHERE ${idField}=$${fields.length + 1} RETURNING *`,
      [...values, id]
    );

    return result.rows[0];
  },

  remove: async (table, idField, id) => {
    await query(`DELETE FROM ${table} WHERE ${idField}=$1`, [id]);
    return true;
  },
};

export default BaseModel;
