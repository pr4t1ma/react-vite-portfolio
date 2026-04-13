import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact } from "./pages/ContactComponent/Contact";
import { Home } from "./pages/HomeComponents/Home";
import BundesplatzPage from "./pages/Bundesplatsdetailspage/Bundesplatz";
import TaskManagementPage from "./pages/TaskManagementDetailsPage/TaskManagement";
import HealthAppPage from "./pages/HealthAppDetailsPage/HealthApp";
import { useEffect, useState, createContext } from "react";

export const DarkModeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: (_: boolean) => {},
});

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
    {
      path: "/project/bundesplatz-kino",
      element: <BundesplatzPage />,
    },
    {
      path: "/project/task-management",
      element: <TaskManagementPage />,
    },
    {
      path: "/project/health-app",
      element: <HealthAppPage />,
    },
  ],
  { basename: "/react-vite-portfolio" },
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    // Apply dark class to html element (root)
    const htmlElement = document.documentElement;
    const body = document.body;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
      body.classList.add("dark");
      htmlElement.style.backgroundColor = "#111827";
      body.style.backgroundColor = "#111827";
    } else {
      htmlElement.classList.remove("dark");
      body.classList.remove("dark");
      htmlElement.style.backgroundColor = "#ffffff";
      body.style.backgroundColor = "#ffffff";
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300 min-h-screen">
        <RouterProvider router={router} />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
