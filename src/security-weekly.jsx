import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SecurityWeekly } from "./components/SecurityWeekly";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SecurityWeekly />
  </StrictMode>,
);
