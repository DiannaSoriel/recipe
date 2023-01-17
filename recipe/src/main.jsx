import "bulma/css/bulma.css";
import "./xcs.css";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#content")).render(<App />);