import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddMeal from "./AddMeal";

function NutritionTracker() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [meals, setMeals] = useState(
    JSON.parse(localStorage.getItem("meallist") || [])
  );
  const [totals, setTotals] = useState({ calories: 0, protein: 0, fat: 0 });

  useEffect(() => {
    const mealitems = JSON.parse(localStorage.getItem("meallist"));
    setMeals(mealitems);
  }, []);

  useEffect(() => {
    const calculateTotals = () => {
      let totalCalories = 0;
      let totalProtein = 0;
      let totalFat = 0;
      meals.forEach((meal) => {
        totalCalories += Number(meal.calories);
        totalProtein += Number(meal.protein);
        totalFat += Number(meal.fat);
      });
      setTotals({
        calories: totalCalories,
        protein: totalProtein,
        fat: totalFat,
      });
    };

    calculateTotals();
  }, [meals]);

  return (
    <>
      <div className=" flex justify-center mt-4">
        <div className=" w-1/3 h-screen overflow-scroll border-2 border-black">
          <div className=" h-20 bg-[#eae8d5]">
            <h1 className=" text-2xl text-center font-bold font-mono pt-5 ">
              Nutrition Tracker
            </h1>
          </div>
          <div>
            <p className=" text-2xl font-semibold text-center">Today</p>
          </div>
          {meals &&
            meals.map((meal, index) => (
              <div
                className="flex flex-col  border-2 rounded-lg mx-3 my-3 shadow-lg"
                key={index}
              >
                <div className="date flex justify-center items-center rounded-t-lg border-2  h-full bg-[#938f6e]">
                  <p className=" text-xl font-bold">{meal.name}</p>
                </div>
                <div className=" flex flex-col  w-full ">
                  <div className=" flex items-center py-2  w-full h-1/2  ">
                    <p className="flex-1 font-semibold mx-2 text-center">
                      Calories: {meal.calories} cal
                    </p>
                    <p className="flex-1 font-semibold mx-2 text-center">
                      Protein : {meal.protein} gm
                    </p>
                  </div>
                  <div className=" flex items-center py-2 w-full h-1/2">
                    <p className="flex-1 font-semibold mx-2 text-center">
                      Fat: {meal.fat} gm
                    </p>
                    <p className="flex-1 font-semibold mx-2 text-center"></p>
                  </div>
                </div>
              </div>
            ))}

          <div className=" flex flex-row-reverse mr-4 text-4xl text-[#938f6e] ">
            <AddMeal />
          </div>
          <div className=" flex justify-center">
            <Link to="/weekly-report">
              <button className="border-2 px-2 py-1 rounded-md hover:bg-[#938f6e]">
                See weekly report
              </button>
            </Link>
          </div>

          <div className=" my-5 ">
            <div className=" text-center text-2xl font-semibold bg-[#938f6e] ">
              Total
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className=" flex items-center pl-5 w-full h-1/2 my-3 ">
                <p className="flex-1 text-2xl font-semibold mx-2">
                  Calories: {totals.calories} cal
                </p>
                <p className="flex-1 text-2xl pl-5 font-semibold mx-2">
                  Protein : {totals.protein} gm
                </p>
              </div>
              <div className=" flex items-center pl-5 w-full h-1/2">
                <p className="flex-1 text-2xl font-semibold mx-2">
                  Fat: {totals.fat} gm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NutritionTracker;
