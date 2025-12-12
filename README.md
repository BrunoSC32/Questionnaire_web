# Questionnaire Web

Backend en **Node.js + Express** con base de datos **PostgreSQL** para la gestión de cuestionarios.

## Instalación

```bash
npm install
```

## Variables de entorno

Crea el archivo `.env` en la raíz con, al menos, estos valores (ajusta según tu entorno):

```env
PORT=3000
HTTPS_PORT=3443
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=questionnaire_db
SSL_KEY_PATH=C:\certs-questionnaire\key.pem
SSL_CERT_PATH=C:\certs-questionnaire\cert.pem
```

Si no quieres HTTPS todavía, puedes dejar `SSL_KEY_PATH` y `SSL_CERT_PATH` vacíos y el servidor iniciará sólo en HTTP.

## Seeds

Para poblar los catálogos y datos base:

```bash
npm run seed:catalogos
```

## Servidor de desarrollo

```bash
npm run dev
```

Esto levanta:
- `http://localhost:3000`
- `https://localhost:3443` (HTTP/2 + TLS si existen los certificados configurados)

## HTTPS local paso a paso

1. **Genera certificados autofirmados (PowerShell):**
	```powershell
	mkdir C:\certs-questionnaire
	openssl genrsa -out C:\certs-questionnaire\key.pem 2048
	openssl req -new -x509 -key C:\certs-questionnaire\key.pem -out C:\certs-questionnaire\cert.pem -days 365
	```
	Rellena los campos del `openssl req` con cualquier valor (es sólo para uso local).

2. **Apunta las rutas en `.env`** usando las variables `SSL_KEY_PATH` y `SSL_CERT_PATH` como se muestra arriba.

3. **Arranca el proyecto** con `npm run dev` y abre `https://localhost:3443` en el navegador. Acepta la advertencia del certificado autofirmado (opción “Avanzado” → “Continuar a localhost”). Tu navegador negociará HTTP/2 automáticamente (caerá a HTTP/1.1 si no lo soporta).

4. **Postman**: si aparece un error de certificado, desactiva `SSL certificate verification` en `Settings > General` o añade una excepción para `localhost`.

## Estructura básica

```
.
├─ public/
├─ src/
│  ├─ app.js
│  ├─ server.js
│  ├─ config/
│  │  ├─ db.js
│  │  └─ swagger.js
│  ├─ controllers/
│  ├─ models/
│  └─ routes/
├─ src/seeds/
│  └─ catalogos.seed.js
├─ .env
├─ package.json
└─ README.md
```

