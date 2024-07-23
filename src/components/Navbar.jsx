import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className=" flex h-20 w-full shadow-md bg-[#eae8d5]">
      <div className=" flex-initial mx-3 w-60 h-full ">
        <img className=" h-full w-60" src={logo} alt="Fitness Freak" />
      </div>
      <div className=" flex-1 flex items-center justify-center ">
        <ul className=" flex space-x-14 text-xl ">
          <li>Home</li>
          <div
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            className="cursor-pointer relative  "
          >
            Catogories
            {dropdown && (
              <div
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                className="absolute rounded shadow-md w-40 space-y-3 py-4"
              >
                <li>BMI Calculator</li>
                <li>Nutrition Tracker</li>
                <li>Exercise Plan</li>
              </div>
            )}
          </div>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=" w-72 ">
        <div className=" flex items-center justify-center my-4 ">
          {" "}
          <FaRegUserCircle className=" text-3xl mx-4" />
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
