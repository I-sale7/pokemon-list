import ReactDOM from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App";
import { pokemonApi } from "./services/pokemonAPI";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "./index.css";

const rootElement = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(rootElement as HTMLElement);

reactRoot.render(
  <ApiProvider api={pokemonApi}>
    <App />
  </ApiProvider>,
);
