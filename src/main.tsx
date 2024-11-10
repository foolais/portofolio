import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";

const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContentLayout>
        <MainLayout />
      </ContentLayout>
    </ThemeProvider>
  </StrictMode>
);
