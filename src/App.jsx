import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
