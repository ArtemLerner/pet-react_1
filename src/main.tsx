import {RouterProvider} from "react-router-dom";
import {router} from "./app/router.tsx";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)


// ## Roadmap
//  connect styles task form.
// - [ ] Mark tasks as completed
// - [ ] Edit existing tasks
// - [ ] Filter tasks (all / active / completed)
// - [ ] Persist tasks in `localStorage`
// - [ ] Empty state and responsive layout improvements
// - [ ] Unit tests with Vitest
