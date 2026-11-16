import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";
import Loader from "./CommenComponets/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>

    <Toaster
      position="top-left"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
      }}
    />
  </StrictMode>
);
