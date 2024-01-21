import Detail from "../pages/Detail";
import UserRout from "../pages/UserRout";
import AddPage from "../pages/addpages";
import Basket from "../pages/basket";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist";

export const routers = [
  {
    path: "/",
    element: <UserRout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/addPages",
        element: <AddPage />,
      },
      {
        path: "/products/:id",
        element: <Detail />,
      },
    ],
  },
];
