# Task Manager with Authentication

## Challenge Description

Create a fullstack application where users can:
1. Authenticate via JWT.
2. View and edit a simulated task list from a React frontend.
3. Interact with a backend API that has only 2 endpoints: `POST /task` and `PUT /task/:id`.

## Technical Requirements

### Backend (Node.js + Express)
- **Endpoints**:
  - `POST /task`: Accepts `title` and `description`, simulates saving tasks in-memory.
  - `PUT /task/:id`: Updates `title` and `description` for the given task ID.
- **Middleware**:
  - Validate JWT for every endpoint.
- **Authentication**:
  - Hardcoded login: `user=admin`, `pass=1234`.
  - Generate JWT using `jsonwebtoken` with `secret = "rocket123"`.
- **No database**: Use an in-memory array for task storage.

### Frontend (React)
- **State Management**: Use Context API, Redux, or Zustand to manage user state (token, tasks).
- **UI**:
  - Display a task list (simulated or fetched from state).
  - Include forms to add/edit tasks (using `POST` and `PUT`).
- **Performance**:
  - Implement lazy loading for `TaskList` and `TaskForm` components.
- **Middleware**:
  - Intercept API calls (Axios or Fetch wrapper) to attach the JWT.
- **Testing**:
  - Write at least 1 unit test for a component (Jest + Testing Library).

### Constraints
- Avoid UI frameworks (Bootstrap, MUI); use Tailwind or simple CSS.
- TypeScript is optional.
- Submit as a public GitHub repo or ZIP file.

## Estimated Time
4 to 6 hours.

## How to Run
1. **Backend**:
   - Navigate to the `backend` folder.
   - Install dependencies: `npm install`.
   - Start the server: `npm start`.

2. **Frontend**:
   - Navigate to the `frontend` folder.
   - Install dependencies: `npm install`.
   - Start the application: `npm run dev`.

## Testing
Run unit tests for the frontend:
```bash
cd frontend
npm test
