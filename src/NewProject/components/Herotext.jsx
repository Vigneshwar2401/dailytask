import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FaAngleDown } from "react-icons/fa";
import { BiAward } from "react-icons/bi";

function Herotext() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <div className="h-full w-full flex justify-center flex-col items-center gap-55">
      <div className=" text-white text-center flex flex-col justify-center items-center gap-8 w-8/12">
        <h1
          className={`${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } duration-500 text-6xl font-bold`}
        >
          Find Your Perfect Tutor
        </h1>
        <h1
          className={`${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } duration-1000 pl-15 pr-15 mt-3 `}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. praesentium,
          explicabo tenetur quidem minima adipisci maiores labore nulla aliquid
          officia optio ipsum amet consectetur. Qui doloribus natus unde eos
          beatae aliquam repellendus voluptatum excepturi.
        </h1>
        <div
          className={`${
            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } duration-[1.5s] flex gap-4 justify-center items-center`}
        >
          <Button title="Find Your Tutor" />
          <Button title="Featured Tutor" icon={<BiAward />} />
        </div>
      </div>
      <div className="text-white cursor-pointer text-2xl">
        <FaAngleDown />
      </div>
    </div>
  );
}

export default Herotext;
