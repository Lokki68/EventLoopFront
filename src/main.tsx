import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { listenToAuthChanges } from "./services/auth.ts";
import { useAuthStore } from "./store/useAuthStore.ts";

listenToAuthChanges();
console.log("Store Init", useAuthStore.getState());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
