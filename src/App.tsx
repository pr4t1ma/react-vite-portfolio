import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div>Hello world! go to /test to check if the router is working</div>
      ),
    },
    {
      path: "/test",
      element: <div>Test! works!!</div>,
    },
  ],
  { basename: "/vite-react-router-github-pages" }
);

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
