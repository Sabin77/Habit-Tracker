import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import AddMeal from "./AddMeal";

function NutritionTracker() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className=" flex justify-center mt-4">
        <div className=" w-1/3 border-2 border-black">
          <div className=" h-20 bg-[#eae8d5]">
            <h1 className=" text-2xl text-center font-bold font-mono pt-5 ">
              Nutrition Tracker
            </h1>
          </div>
          <div>
            <p className=" text-2xl font-semibold text-center">Today</p>
          </div>
          <div className="flex flex-col  border-2 rounded-lg mx-3 my-3 shadow-lg">
            <div className="date flex justify-center items-center rounded-t-lg border-2  h-full bg-[#938f6e]">
              <p className=" text-xl font-bold">Breakfast</p>
            </div>
            <div className=" flex flex-col  w-full ">
              <div className=" flex items-center py-2  w-full h-1/2  ">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Calories: 200 cal
                </p>
                <p className="flex-1 font-semibold mx-2 text-center">
                  Protein : 40 gm
                </p>
              </div>
              <div className=" flex items-center py-2 w-full h-1/2">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Fat: 200 gm
                </p>
                <p className="flex-1 font-semibold mx-2 text-center"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border-2 rounded-lg mx-3 my-3 shadow-lg">
            <div className="date flex justify-center items-center rounded-t-lg border-2  h-full bg-[#938f6e]">
              <p className=" text-xl font-bold">Lunch</p>
            </div>
            <div className=" flex flex-col  w-full ">
              <div className=" flex items-center py-2  w-full h-1/2  ">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Calories: 200 cal
                </p>
                <p className="flex-1 font-semibold mx-2 text-center">
                  Protein : 40 gm
                </p>
              </div>
              <div className=" flex items-center py-2 w-full h-1/2">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Fat: 200 gm
                </p>
                <p className="flex-1 font-semibold mx-2 text-center"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  border-2 rounded-lg mx-3 my-3 shadow-lg">
            <div className="date flex justify-center items-center rounded-t-lg border-2  h-full bg-[#938f6e]">
              <p className=" text-xl font-bold">Dinner</p>
            </div>
            <div className=" flex flex-col  w-full ">
              <div className=" flex items-center py-2  w-full h-1/2  ">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Calories: 200 cal
                </p>
                <p className="flex-1 font-semibold mx-2 text-center">
                  Protein : 40 gm
                </p>
              </div>
              <div className=" flex items-center py-2 w-full h-1/2">
                <p className="flex-1 font-semibold mx-2 text-center">
                  Fat: 200 gm
                </p>
                <p className="flex-1 font-semibold mx-2 text-center"></p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row-reverse mr-4 text-4xl text-[#938f6e] ">
            <AddMeal />
          </div>
          <div className="  my-5">
            <div className=" text-center text-2xl font-semibold bg-[#938f6e] ">
              Total
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className=" flex items-center pl-5 w-full h-1/2 my-3 ">
                <p className="flex-1 text-2xl font-semibold mx-2">
                  Calories: 600 cal
                </p>
                <p className="flex-1 text-2xl pl-5 font-semibold mx-2">
                  Protein : 120 gm
                </p>
              </div>
              <div className=" flex items-center pl-5 w-full h-1/2">
                <p className="flex-1 text-2xl font-semibold mx-2">
                  Fat: 600 gm
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
