import { createBrowserRouter } from "react-router-dom";
//SE IMPORTAN LOS COMPONENTES
import Home, { loaderProducts } from "../pages/Home/Home";
import Root from "../layout/Root";
import About from "../pages/About/About";
import ProductDetail, {loaderProductDetail} from "../pages/ProductDetail/ProductDetail";
import Header from "../components/Header/Header";

import "../App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loaderProducts,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/detail/:id",
        element: <ProductDetail />,
        loader: loaderProductDetail,
      },
    ],
  },
]);

export default router;
