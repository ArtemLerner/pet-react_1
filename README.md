# Todo List

A small task manager built with React and TypeScript. Add tasks, remove them, and keep your list in view. Built as a pet project to practice component architecture, typed props, state management and client-side routing.

**Live demo:** https://pet-react1.vercel.app

<!-- Replace with a real screenshot: save it as docs/screenshot.png -->
![Todo List screenshot](docs/screenshot.png)

## Features

- Add a task through a form (empty and whitespace-only input is ignored)
- Delete any task from the list
- Unique task ids via `crypto.randomUUID()`
- Client-side routing with React Router
- Strictly typed components and props (TypeScript)
- Linting with oxlint

## Tech stack

| Area | Tools |
| --- | --- |
| UI | React 19 |
| Language | TypeScript |
| Build tool | Vite |
| Routing | React Router 7 |
| Styling | Less |
| Linting | oxlint |
| Deployment | Vercel |

## Getting started

Requirements: Node.js 20+ and npm.

```bash
# clone the repository
git clone https://github.com/ArtemLerner/pet-react_1.git
cd pet-react_1

# install dependencies
npm install

# start the dev server
npm run dev
```

The app will be available at http://localhost:5173.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

## Project structure

```
src/
├── app/
│   └── router.tsx         # route definitions
├── components/
│   ├── Form/              # task input form
│   └── Task/              # single task item
├── pages/
│   └── HomePage.tsx       # main page, owns the tasks state
├── shared/
│   └── types/            # shared types and constants
├── index.less             # global styles
└── main.tsx               # app entry point
```

State lives in `HomePage` and is passed down through props: `Form` receives an `addTask` callback, and each task receives an `onDelete` callback.

## Deployment

The project is deployed on Vercel. Every push to `main` triggers a new production deployment. Since this is a single-page app, `vercel.json` rewrites all routes to `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Author

**Artem Lerner**

- GitHub: [@ArtemLerner](https://github.com/ArtemLerner)