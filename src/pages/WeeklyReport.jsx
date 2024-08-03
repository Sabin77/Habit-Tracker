import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

function WeeklyReport() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState("");

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
    setFilteredData([]);
  };

  const handleSearch = async () => {
    if (!startDate || !endDate) {
      return;
    }

    const formattedStartDate = format(startDate, "yyyy-MM-dd");
    const formattedEndDate = format(endDate, "yyyy-MM-dd");
    console.log(formattedStartDate);
    console.log(formattedEndDate);

    try {
      const response = await axios.get(
        `http://192.168.1.97:2001/api/blogs/filter?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data) {
        setFilteredData(response.data);
        console.log(response.data);
      }
    } catch (error) {}
  };

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

        <div className="flex flex-col">
          <div className=" flex mx-2 my-4 items-center">
            <p className=" font-mono">From:</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, "yyyy-MM-dd")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <p className=" font-mono">To:</p>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, "yyyy-MM-dd")
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button className="ml-4" onClick={handleSearch}>
              Search
            </Button>
            <button
              className=" py-2 rounded-md px-3 border-2 mx-3 hover:bg-gray-300"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        {/* <div className=" flex justify-center">
          <button className="border-2 px-2 py-1 rounded-md hover:bg-[#938f6e]">
            Search by date
          </button>
        </div> */}
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
