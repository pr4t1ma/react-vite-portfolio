import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./ContactComponent/Contact";
import { Home } from "./HomeCOmponents/Home";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

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
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
