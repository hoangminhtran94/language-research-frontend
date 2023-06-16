import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { loader as mainPageLoader } from "./Pages/MainPage";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Layout";
import MainPage from "./Pages/MainPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<MainPage />} loader={mainPageLoader} />
    </Route>
  )
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
