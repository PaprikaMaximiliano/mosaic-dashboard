

## Containerization

Run the app and the mock JSON API together with Docker Compose:

```powershell
docker compose up --build
```

- Frontend (Vite dev server) will be available at `http://localhost:5173`
- JSON API (json-server) will be available at `http://localhost:3000`

Stop and remove containers with:

```powershell
docker compose down
```

The `docker-compose.yml` mounts the project into the frontend container so HMR works during development.

## Run without docker
Run the app  :
```powershell
npm run dev
```
Run  the mock JSON API :
```powershell
npm run server
```

## Short summary about solution
Used native fetch, because no need for complex libraries. In more bigger apps I would prefer using TanStack Query or RTK Query.

Error and loading management is as simple as possible.
Split Window is not implemented(task didn't required it)

Added a select from blueprint for selecting which company to fetch 