import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Footer } from "./components/Footer.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { Navbar } from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
    <ScrollToTop />
  </React.StrictMode>
);
