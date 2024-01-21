import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routers } from "./routes/rout";
const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
