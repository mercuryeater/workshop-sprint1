import { createBrowserRouter } from "react-router-dom";
//SE IMPORTAN LOS COMPONENTES
import Home from "../pages/Home";
import Root from "../layout/Root";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import Header from "../components/Header";

import "../App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/h",
        element: <Header />,
        children: [],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/ProductDetail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;