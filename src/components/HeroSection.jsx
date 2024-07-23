import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import healthy from "../assets/helathy.jpg";

import vegies from "../assets/vegies.jpg";
import bmi from "../assets/BMI.jpg";
import workout from "../assets/workout.jpg";

import Autoplay from "embla-carousel-autoplay";
import { TypeAnimation } from "react-type-animation";
import Categories from "./Categories";

const data = [
  {
    name: "Vegetables",
    img: vegies,
    key: 1,
  },
  {
    name: "BMI",
    img: bmi,
    key: 2,
  },
  {
    name: "Workout",
    img: workout,
    key: 3,
  },
  {
    name: "Healthy",
    img: healthy,
    key: 4,
  },
];

function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <div className=" flex  border-blue-400 h-96 mt-10">
        <div className=" flex flex-1 justify-center items-center border-red-600">
          <TypeAnimation
            className="flex absolute text-5xl sm:text-7xl font-poetsen"
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              width: "600px",
              display: "block",
            }}
            sequence={["Fuel Your Body, Nourish Your Life", 2000, ""]}
            repeat={Infinity}
          />
        </div>
        <div className=" flex flex-1 justify-center items-center  border-yellow-400">
          <div className=" ">
            <Carousel
              className=" w-[600px] h-72  rounded-lg "
              plugins={[plugin.current]}
              // onMouseEnter={plugin.current.stop}
              // onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {data.map((data) => (
                  <CarouselItem key={data.key}>
                    <img
                      className=" bg-cover h-72 w-full rounded-md "
                      src={data.img}
                      alt=""
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
}

export default HeroSection;
