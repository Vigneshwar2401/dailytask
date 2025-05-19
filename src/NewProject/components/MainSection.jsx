import React from "react";
import Button from "./Button";
import { BiAward } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import Herotext from "./Herotext";

function MainSection() {
  return (
    <div className="relative h-10/12 w-full">
      <Herotext />

      <div className="bottom_design absolute  bottom-0 left-0 h-10 bg-white w-full" />
    </div>
  );
}

export default MainSection;
