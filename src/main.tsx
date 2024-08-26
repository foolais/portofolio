import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePages from "@/pages/HomePages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePages />
  </StrictMode>
);
