import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./context/theme-provider";
import { NavigationProvider } from "./context/navigation-provider";

const MainLayout = lazy(() => import("./layouts/MainLayout"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavigationProvider>
        <MainLayout />
      </NavigationProvider>
    </ThemeProvider>
  </StrictMode>
);
