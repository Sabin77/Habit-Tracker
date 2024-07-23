import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import exercise from "../assets/exercise.png";
import Bmi from "../assets/BMIcalc.png";
import nutritiontracker from "../assets/nutritiontrack.png";

function Categories() {
  return (
    <div className=" flex justify-center items-center space-x-40  my-10 ">
      <Link to="/nutrition-tracker">
        <div className=" h-72 w-60 cursor-pointer">
          <div className="card-container  h-60 w-60 shadow-lg ">
            <img src={nutritiontracker} alt="" />
          </div>
          <p className=" text-center text-2xl font-bold mt-4">
            Nutrition Tracker
          </p>
        </div>
      </Link>
      <div className=" h-72 w-60 cursor-pointer">
        <div className="card-container  h-60 w-60 shadow-lg">
          <img src={exercise} alt="" />
        </div>
        <p className=" text-center text-2xl font-bold mt-4">Exercise Plan</p>
      </div>
      <div className=" h-72 w-60 cursor-pointer">
        <div className="card-container  h-60 w-60 shadow-lg">
          <img src={Bmi} alt="" />
        </div>
        <p className=" text-center text-2xl font-bold mt-4">BMI Calculator</p>
      </div>
    </div>
  );
}

export default Categories;
