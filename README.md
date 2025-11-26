# Questionnaire Web – Inicialización del Proyecto

Proyecto backend en **Node.js + Express** con base de datos **PostgreSQL**


## Instalar Dependencias

En la raíz del proyecto ejecutar:

```bash
npm install

---

## ⚙️ Crear el Archivo `.env`
```

Ajustar los valores según tu entorno de PostgreSQL.

---

## Seeds 

Para poblar las tablas de catálogos (`tipo_pregunta`, `estado_pregunta`, `dificultad`, `categoria_edad`, `clasificacion`) ejecutar:

```bash
npm run seed:catalogos
```

## Estructura de Archivos del Proyecto

```
.
├─ public/
├─ src/
│  ├─ config/
│  │  └─ db.js
│  ├─ routes/
│  │  └─ index.routes.js
│  ├─ app.js
│  └─ server.js
├─ .env
├─ .gitignore
├─ package.json
└─ README.md
```

