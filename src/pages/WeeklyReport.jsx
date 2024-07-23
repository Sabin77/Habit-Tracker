import React from "react";

function WeeklyReport() {
  return (
    <div className=" flex justify-center mt-4">
      <div className=" w-1/3 border-2 border-black">
        <div className=" h-20 bg-[#eae8d5]">
          <h1 className=" text-2xl text-center font-bold font-mono pt-5 ">
            Nutrition Tracker
          </h1>
        </div>
        <div>
          <p className=" text-2xl font-semibold text-center">This week</p>
        </div>
        <div className="flex h-24 border-2 rounded-lg mx-3 my-3 shadow-lg">
          <div className="date flex justify-center items-center rounded-l-lg border-2 w-28 h-full bg-[#938f6e]">
            <p className=" text-xl font-bold">
              Sun <br /> Jul 21
            </p>
          </div>
          <div className=" flex flex-col w-full  border-red-300">
            <div className=" flex items-center  w-full h-1/2  ">
              <p className="flex-1 font-semibold mx-2">Calories: 200 cal</p>
              <p className="flex-1 font-semibold mx-2">Protein : 40 gm</p>
            </div>
            <div className=" flex items-center  w-full h-1/2">
              <p className="flex-1 font-semibold mx-2">Fat: 200 gm</p>
            </div>
          </div>
        </div>
        <div className="flex h-24 border-2 rounded-lg mx-3 my-3 shadow-lg">
          <div className="date flex justify-center items-center rounded-l-lg border-2 w-28 h-full bg-[#938f6e]">
            <p className=" text-xl font-bold">
              Mon <br /> Jul 22
            </p>
          </div>
          <div className=" flex flex-col w-full  border-red-300">
            <div className=" flex items-center  w-full h-1/2  ">
              <p className="flex-1 font-semibold mx-2">Calories: 200 cal</p>
              <p className="flex-1 font-semibold mx-2">Protein : 40 gm</p>
            </div>
            <div className=" flex items-center  w-full h-1/2">
              <p className="flex-1 font-semibold mx-2">Fat: 200 gm</p>
            </div>
          </div>
        </div>
        <div className="flex h-24 border-2 rounded-lg mx-3 my-3 shadow-lg">
          <div className="date flex justify-center items-center rounded-l-lg border-2 w-28 h-full bg-[#938f6e]">
            <p className=" text-xl font-bold">
              Tue <br /> Jul 23
            </p>
          </div>
          <div className=" flex flex-col w-full  border-red-300">
            <div className=" flex items-center  w-full h-1/2  ">
              <p className="flex-1 font-semibold mx-2">Calories: 200 cal</p>
              <p className="flex-1 font-semibold mx-2">Protein : 40 gm</p>
            </div>
            <div className=" flex items-center  w-full h-1/2">
              <p className="flex-1 font-semibold mx-2">Fat: 200 gm</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row-reverse mr-4 text-4xl text-[#938f6e] ">
          <IoMdAddCircle />
        </div>
        <div className=" border-2 my-5">
          <div className=" text-center text-2xl font-semibold bg-[#938f6e] ">
            Total
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className=" flex items-center pl-5 w-full h-1/2 my-3 ">
              <p className="flex-1 text-2xl font-semibold mx-2">
                Calories: 200 cal
              </p>
              <p className="flex-1 text-2xl pl-5 font-semibold mx-2">
                Protein : 40 gm
              </p>
            </div>
            <div className=" flex items-center pl-5 w-full h-1/2">
              <p className="flex-1 text-2xl font-semibold mx-2">Fat: 200 gm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyReport;
