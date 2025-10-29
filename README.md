# hw_03 — Development README

This project contains a NestJS backend and a Vite + React frontend (exercise hw_03).

This README explains how to install dependencies and run the project locally on Windows (PowerShell). Adjust commands for other shells/OS as needed.

## Prerequisites

- Node.js (LTS recommended — Node 16+ or 18+). Verify with: node --version and npm --version
- Git (optional, to clone the repo)

## Project layout

- backend/ — NestJS backend (API)
- frontend/ — Vite + React frontend (UI)

## Backend — install & run (NestJS)

1. Open a terminal and go to the backend folder:

PowerShell command: cd d:\AdvancedWeb\hw_03\backend

2. Install dependencies:

PowerShell command: npm install

3. Configure environment variables

- A .env file is included in the backend folder. If you need to change values, edit backend\.env. Ensure any required secrets (DB connection, JWT secret, etc.) are set there before starting.

4. Run the backend in development (watch) mode:

PowerShell command: npm run start:dev

If the script above doesn't exist, try: npm run start

Notes:
- Typical NestJS defaults serve the API on port 3000. If your main.ts or configuration sets a different port, use that.
- To build for production: npm run build and then npm run start:prod (if provided in package.json).

## Frontend — install & run (Vite + React)

1. Open a separate terminal and go to the frontend folder:

PowerShell command: cd d:\AdvancedWeb\hw_03\frontend

2. Install dependencies:

PowerShell command: npm install

3. Run the dev server:

PowerShell command: npm run dev

Notes:
- Vite's dev server usually runs on port 5173. When it starts it prints the local URL (for example, http://localhost:5173).
- To build for production: npm run build. To preview the built site locally (if script exists): npm run preview.

## Running backend + frontend together

Open two terminals (one for backend, one for frontend) and run the commands above in each directory. Example:

Terminal A (backend):
1) cd d:\AdvancedWeb\hw_03\backend
2) npm install
3) npm run start:dev

Terminal B (frontend):
1) cd d:\AdvancedWeb\hw_03\frontend
2) npm install
3) npm run dev

If you prefer a single command to run both in development, you can add a root-level script that uses a tool like concurrently (optional).

## Tests

- The backend contains test files (test/ and jest-e2e.json). Common Nest scripts are: npm test (unit) and npm run test:e2e (end-to-end), if those scripts are present in backend/package.json.
- The frontend may include test scripts depending on frontend/package.json — check that file for details.

## Troubleshooting

- Port conflicts: If a port is already in use, change the port in the corresponding config or stop the other service.
- Missing scripts: If npm run <script> fails with "missing script", open package.json in that folder to see available scripts.
- Environment variables: Double-check backend\.env for required keys before starting the backend.

## Helpful tips

- Use two terminals when developing so the frontend hot-reloads while the backend runs concurrently.
- If you change backend API routes, update the frontend API base URL if it's hard-coded.

## Where to look in the code

- Backend entry: backend/src/main.ts and modules under backend/src/.
- Frontend entry: frontend/src/main.jsx and pages/components under frontend/src/components/.

---

If you'd like, I can also add:

- A root-level npm script to start both services using `concurrently`.
- Example .env.example files for both backend and frontend.

Let me know which (if any) you'd like next.
