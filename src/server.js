
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import pool from "./config/db.js"; 

const PORT = process.env.PORT || 3000;

const testDbConnection = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Conected to PostgresSQL:", result.rows[0].now);
  } catch (error) {
    console.error("Error to conect PostgreSQL:", error?.message || error);
    if (error?.stack) {
      console.error(error.stack);
    }
  }
};

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  testDbConnection(); 
});
