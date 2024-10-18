import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home.jsx";
import Games from "./pages/games.jsx";
import { NewGameProvider } from "./context/NewGameContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Games />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/games",
      element: <Games />,
    },
    {
      path: "/movies",
      element: <h1>hello World</h1>,
    },
    {
      path: "/news",
      element: <h1>Hello World</h1>,
    },
  ],
  { basename: "/QuestForGame-1.5/" }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewGameProvider>
      <RouterProvider router={router} />
    </NewGameProvider>
  </StrictMode>
);
