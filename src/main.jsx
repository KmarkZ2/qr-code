import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Layout } from "./Layout";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
