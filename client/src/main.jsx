
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';

import "./index.css";
import router from "../routes/all-routes";
import  {RouterProvider}  from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
