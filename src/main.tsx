import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepages from "./pages/Homepages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Homepages />
  </StrictMode>
);
