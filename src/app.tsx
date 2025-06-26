import { createRoot } from "react-dom/client";
import React from "react";

import { Router } from "./router";

const root = createRoot(document.body);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
