import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Categories from "./routes/Categories";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import InnerPage from "./routes/InnerPage";
import Category from "./routes/Category";
import Recipe from "./routes/Recipe";

// export const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   { path: "/categories", element: <Categories /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> },
// ]);
export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <InnerPage />,
        children: [
          { path: "/categories", element: <Categories /> },
          { path: "/categories/:category", element: <Category /> },
          { path: "/recipes/:recipeId", element: <Recipe /> },
          { path: "/about", element: <About /> },
          { path: "/contact", element: <Contact /> },
        ],
      },
    ],
  },
]);
