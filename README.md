# Questionnaire_web
Final web programming project 
# Backend (Django)

Instrucciones rápidas para poner en marcha el backend localmente:

El proyecto base está en `questionnaire_backend`. Las apps iniciales son `users` y `questionnaires`.

Pasos que seguí (levantamiento local usando SQLite)
-------------------------------------------------

Si ya estás en la carpeta raíz del repo, estos son los pasos exactos que se ejecutaron para levantar el proyecto en desarrollo (SQLite por defecto):

1. Crear y activar el virtualenv (PowerShell):

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Instalar dependencias:

```powershell
pip install -r requirements.txt
```

3. Crear y aplicar migraciones (SQLite por defecto):

```powershell
python manage.py makemigrations
python manage.py migrate
```

4. Crear superusuario (opcional, para acceder al admin):

```powershell
python manage.py createsuperuser
```

5. Levantar servidor de desarrollo:

```powershell
python manage.py runserver
```


---------------------

- Admin: `http://127.0.0.1:8000/admin/`
- API questionnaires: `http://127.0.0.1:8000/api/questionnaires/`

