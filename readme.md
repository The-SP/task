# Full Stack Application

This full-stack website is built using Django REST for the backend and React for the frontend.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **CRUD operations**:
  - All users can read blog posts.
  - Authenticated users can create, read, update, and delete blog posts.
- **User Authorization**: Only the author of a blog post can update or delete that post.
- **Pagination**: The list of blog posts is paginated, displaying a limited number of posts per page.
- **User's Blog Posts**: Authenticated users can view a list of all blog posts written by them.

## Setup

### Backend

- The backend utilizes Django REST framework for building a powerful API.
- Authentication features: signup, login, password reset, etc.

### Backend Setup
- Create a virtual environment and install the required Python packages:
  ```bash
  cd backend
  # create virtual environment
  py -m venv env
  env\Scripts\activate
  # install required python packages
  pip install -r requirements.txt
  ```
- To enable sending email notifications to users (e.g., for account creation, password reset), you need to configure email settings. Create a `.env` file inside `backend/core/` with the following content:

  ```plaintext
  EMAIL_HOST_USER=youremail@gmail.com
  EMAIL_HOST_PASSWORD=yourpassword
  DOMAIN=localhost:3000
  SITE_NAME=Blog
  ```

- **Set up PostgreSQL database:**  
   In backend/settings.py, update the DATABASES setting with your PostgreSQL credentials:

  ```py
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql_psycopg2',
          'NAME': 'your_database_name',
          'USER': 'your_database_user',
          'PASSWORD': 'your_database_password',
          'HOST': 'localhost',
          'PORT': '5432',
      }
  }
  ```

### Run Migrations

```bash
py manage.py makemigrations
py manage.py migrate --run-syncdb
```

## Frontend setup

```bash
# Navigate to the `frontend` directory.
cd frontend
# Install required packages
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

The React application will be available at `http://localhost:3000`.

## Technologies Used

- **Backend**: Django, Django REST Framework, PostgreSQL
- **Frontend**: React, React Router, Axios
