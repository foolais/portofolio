import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BackgroundBeams } from "./components/ui/background-beams";
import { LayoutDashboard, LayoutProfile, LayoutProjects } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutDashboard />,
  },
  {
    path: "/profile",
    element: <LayoutProfile />,
  },
  {
    path: "projects",
    element: <LayoutProjects />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <BackgroundBeams className="-z-10" />
    </ThemeProvider>
  </StrictMode>
);
