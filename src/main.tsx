import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./app/App.tsx";
import { TranslationProvider } from "./app/lib/TranslationContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
  <TranslationProvider>
    <App />
  </TranslationProvider>
  </HelmetProvider>
);