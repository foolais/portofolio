import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
