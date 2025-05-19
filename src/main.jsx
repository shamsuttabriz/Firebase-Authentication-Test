import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import AuthPorvider from "./contexts/AuthPorvider.jsx";
import router from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPorvider>
      <RouterProvider router={router} />
    </AuthPorvider>
  </StrictMode>
);
