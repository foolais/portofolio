import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ContentLayout,
  LayoutContact,
  LayoutDashboard,
  LayoutProfile,
  LayoutProjects,
} from "./layouts";

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
  {
    path: "contact",
    element: <LayoutContact />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContentLayout>
        <RouterProvider router={router} />
      </ContentLayout>
    </ThemeProvider>
  </StrictMode>
);
