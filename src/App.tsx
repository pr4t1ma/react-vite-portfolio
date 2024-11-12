import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/ContactComponent/Contact";
import { Home } from "./pages/HomeComponents/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  { basename: "/react-vite-portfolio" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
