# Full Stack Personal Portfolio

A production-ready MERN portfolio with a public website, project API, contact form, JWT-protected admin dashboard, seed data, and deployment configuration for Vercel, Render, and MongoDB Atlas.

## Tech Stack

Frontend: React.js, Vite, React Router, Axios, Framer Motion, React Icons, React Toastify, AOS, CSS3.

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcryptjs, Helmet, rate limiting, CORS, Multer.

## Folder Structure

```text
personal portfolio/
  portfolio-client/
    public/
      resume.pdf
    src/
      api/
      components/
      context/
      data/
      pages/
      styles/
  portfolio-server/
    config/
    controllers/
    middleware/
    models/
    routes/
    seed/
    uploads/
```

## Environment Variables

Create `portfolio-server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=use_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

Create `portfolio-client/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## MongoDB Atlas Setup

1. Create a MongoDB Atlas project and cluster.
2. Create a database user with read/write access.
3. Add your IP address or `0.0.0.0/0` for hosted deployments.
4. Copy the connection string into `MONGO_URI`.
5. Run the seed script to create sample projects and the admin account.

## Installation

```bash
cd portfolio-server
npm install
npm run seed
npm run dev
```

In a second terminal:

```bash
cd portfolio-client
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.
Backend runs at `http://localhost:5000`.

Seeded admin credentials:

```text
username: admin
password: admin123
```

Change this password before deploying.

## API Endpoints

Public:

```text
POST /api/login
POST /api/auth/login
GET  /api/projects
POST /api/contact
```

Protected:

```text
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
GET    /api/messages
```

Protected endpoints require:

```text
Authorization: Bearer <jwt>
```

## Frontend Features

- Home, About, Skills, Projects, Resume, Contact, Admin Login, Admin Dashboard, and 404 pages.
- Responsive navbar, dark/light theme, typing animation, smooth scrolling, project search and filtering.
- Skill progress animation, counters, loaders, toasts, contact validation, and scroll-to-top button.
- Admin dashboard for adding, updating, deleting projects, viewing messages, and logging out.

## Backend Features

- Clean Express architecture with controllers, models, routes, middleware, and config.
- JWT admin authentication, hashed passwords, protected routes, input validation, Helmet, CORS, and rate limiting.
- MongoDB collections for Admin, Projects, and Messages.
- Seed script with sample projects and admin credentials.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set the root directory to `portfolio-client`.
4. Add `VITE_API_URL=https://your-render-service.onrender.com/api`.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

The included `vercel.json` supports React Router page refreshes.

## Deployment on Render

1. Create a new Render Web Service.
2. Set root directory to `portfolio-server`.
3. Build command: `npm install`.
4. Start command: `npm start`.
5. Add `MONGO_URI`, `JWT_SECRET`, and `CLIENT_URL=https://your-vercel-app.vercel.app`.
6. Deploy, then run `npm run seed` from a Render shell if you want sample data.

## Screenshots

Add screenshots after deployment:

```text
screenshots/home.png
screenshots/projects.png
screenshots/admin-dashboard.png
```

## Customization Checklist

- Replace `portfolio-client/public/resume.pdf` with your final resume.
- Update profile links in `portfolio-client/src/data/portfolio.js`.
- Replace project demo links and image URLs in `portfolio-server/seed/seed.js`.
- Change the seeded admin password before production.
