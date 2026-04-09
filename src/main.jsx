import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

try {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <HelmetProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HelmetProvider>
    </StrictMode>
  );
} catch (e) {
  document.getElementById("root").innerHTML =
    `<div style="background:#0C0C0C;color:#C4A265;padding:40px;font-family:sans-serif;">
      <h1>Error loading app</h1><pre style="color:#999;margin-top:16px;">${e.message}\n${e.stack}</pre>
    </div>`;
}
