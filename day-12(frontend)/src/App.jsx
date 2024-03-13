import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./router/root";
import Home from "./router/home";
import Login from "./router/login";
import NavBar from "./components/navbar";
import Light from "./router/light";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/light",
    element: <Light />,
  },
]);

export default function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}
