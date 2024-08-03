import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import HeroSection from "./components/HeroSection.jsx";
import Categories from "./components/Categories.jsx";
import NutritionTracker from "./components/NutritionTracker.jsx";
import WeeklyReport from "./pages/WeeklyReport.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HeroSection />} />
      <Route path="" element={<Categories />} />
      <Route path="/nutrition-tracker" element={<NutritionTracker />} />
      <Route path="/weekly-report" element={<WeeklyReport />} />

      {/* <Route path="" element={<Home />} /> */}
      {/* <Route path="about" element={<Categories />} /> */}
      {/* <Route path="contact" element={<About />} /> */}
      {/* <Route path="user/:userId" element={<Contact />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
