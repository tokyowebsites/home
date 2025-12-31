import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { TranslationProvider } from "./app/lib/TranslationContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
);