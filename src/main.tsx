import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LayoutContact, LayoutProfile, LayoutProjects } from "./layouts";

const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const LayoutDashboard = lazy(() => import("./layouts/dashboard/Layout"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ContentLayout>
    </ThemeProvider>
  </StrictMode>
);
