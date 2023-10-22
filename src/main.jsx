import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import Programs from "./components/Programs.jsx";
import News from "./components/News.jsx";

// manually import program components
import Program1 from "./programs/Program1.jsx";
import Program2 from "./programs/Program2.jsx";
import Program3 from "./programs/Program3.jsx";
import Program4 from "./programs/Program4.jsx";
import Program5 from "./programs/Program5.jsx";
import Program6 from "./programs/Program6.jsx";
// manually import event components
import News1 from "./news/News1.jsx";
import News2 from "./news/News2.jsx";
import News3 from "./news/News3.jsx";
import News4 from "./news/News4.jsx";
import News5 from "./news/News5.jsx";
import News6 from "./news/News6.jsx";

const programRoutes = [
  {
    path: "/earist-extension-program/program1",
    element: <Program1 />,
  },
  {
    path: "/earist-extension-program/program2",
    element: <Program2 />,
  },
  {
    path: "/earist-extension-program/program3",
    element: <Program3 />,
  },
  {
    path: "/earist-extension-program/program4",
    element: <Program4 />,
  },
  {
    path: "/earist-extension-program/program5",
    element: <Program5 />,
  },
  {
    path: "/earist-extension-program/program6",
    element: <Program6 />,
  },
  // ... (add routes for other programs)
];

const newsRoutes = [
  {
    path: "/earist-extension-program/news1",
    element: <News1 />,
  },
  {
    path: "/earist-extension-program/news2",
    element: <News2 />,
  },
  {
    path: "/earist-extension-program/news3",
    element: <News3 />,
  },
  {
    path: "/earist-extension-program/news4",
    element: <News4 />,
  },
  {
    path: "/earist-extension-program/news5",
    element: <News5 />,
  },
  {
    path: "/earist-extension-program/news6",
    element: <News6 />,
  },
  // ... (add routes for other programs)
];
const router = createBrowserRouter([
  {
    path: "/earist-extension-program/",
    element: <App />,
    children: [
      {
        path: "/earist-extension-program/",
        element: <Home />,
      },
      {
        path: "/earist-extension-program/programs",
        element: <Programs />,
      },
      {
        path: "/earist-extension-program/*",
        element: <NotFound />,
      },
      {
        path: "/earist-extension-program/news",
        element: <News />,
      },
      ...programRoutes,
      ...newsRoutes,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
