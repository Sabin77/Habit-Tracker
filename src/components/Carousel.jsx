import React, { useRef } from "react";
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

function Carousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        className=" w-[600px] h-72 border-2 rounded-md "
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
    </>
  );
}

export default Carousel;
