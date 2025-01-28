/** @format */

import { Button } from "@material-tailwind/react";
import { useState } from "react";
import LoginPage from "./Login";
import icon from "/src/assets/logo_j.gif";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showVisibility = () => {
    setIsVisible(true);
  };

  const hideVisibility = () => {
    setIsVisible(false);
  };
  return (
    <div className="border border-[#aeaeae] homebg">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="">
          <img src={icon} alt="" />
        </div>
        <div className="relative">
          <div className="flex gap-2 justify-center">
            <h1 className=" text-[#004182] text-sm cursor-pointer">Help</h1>
            <h1 className=" text-[#004182] text-sm cursor-pointer">FAQS</h1>
          </div>

          <Button
            style={{
              backgroundColor: "gray",
              color: "white",
              // padding: "10px 20px",
              height: 4,
              justifyContent: "center",
              alignItems: "center",

              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "flex",
            }}
            onClick={showVisibility}
          >
            Sign In
          </Button>
          {isVisible && <LoginPage hideVisibility={hideVisibility} />}
        </div>
      </div>
      <div className="h-1 bg-[#20487f] w-full"></div>
    </div>
  );
};

export default Header;
