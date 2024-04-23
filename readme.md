# Full Stack

This full-stack website is built using Django REST for the backend and React for the frontend.

## Backend

- The backend utilizes Django REST framework for building a powerful API.
- Authentication features: signup, login, password reset, etc.

- **Backend Setup**
  ```bash
  cd backend
  py -m venv env
  env\Scripts\activate
  pip install -r requirements.txt
  ```
- To set up email functionality for account creation, you'll need to set up environment variables. Create a `.env` file inside `backend/core/` with the following content:

  ```plaintext
  EMAIL_HOST_USER=youremail@gmail.com
  EMAIL_HOST_PASSWORD=yourpassword
  DOMAIN=localhost:3000
  SITE_NAME=Blog
  ```

- Run Migrations

```bash
py manage.py makemigrations
py manage.py migrate --run-syncdb
```

## Frontend

- **Frontend Setup**
  ```bash
  cd frontend
  npm install
  ```

## Usage

```bash
# Backend
cd backend
py manage.py runserver
```

```bash
# Frontend
cd frontend
npm start
```
