import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App.tsx";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GoogleAnalytics />
    <App />
  </BrowserRouter>
);
