
import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import http from "http";
import http2 from "http2";
import app from "./app.js";
import pool from "./config/db.js";

const PORT = process.env.PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

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

const sslKeyPath = process.env.SSL_KEY_PATH;
const sslCertPath = process.env.SSL_CERT_PATH;

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${PORT}`);
});

const canStartHttps =
  sslKeyPath &&
  sslCertPath &&
  fs.existsSync(sslKeyPath) &&
  fs.existsSync(sslCertPath);

if (canStartHttps) {
  const httpsOptions = {
    key: fs.readFileSync(sslKeyPath),
    cert: fs.readFileSync(sslCertPath),
    allowHTTP1: true, // Express trabaja sobre HTTP/1.1 pero habilitamos HTTP/2 cuando el cliente lo soporte
  };

  const http2Server = http2.createSecureServer(httpsOptions, app);
  http2Server.on("sessionError", (err) => {
    console.error("Error en sesión HTTP/2:", err);
  });

  http2Server.listen(HTTPS_PORT, () => {
    console.log(
      `Servidor HTTP/2+TLS escuchando en https://localhost:${HTTPS_PORT}`
    );
    testDbConnection();
  });
} else {
  console.warn(
    "Certificados SSL no encontrados; define SSL_KEY_PATH y SSL_CERT_PATH para habilitar HTTPS."
  );
  testDbConnection();
}
