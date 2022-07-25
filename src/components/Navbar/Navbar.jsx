import imgs from "~/assets/imgs/index";
import { HiMenu } from "react-icons/hi";
import "./Navbar.scss";
import { useState } from "react";
import { useViewport } from "../hooks/inde";
function Navbar() {
  const [show, setShow] = useState(false);

  function handleMenu() {
    setShow(!show);
  }
  const width = useViewport();

  return (
    <div className="navbar z-[100] py-[10px] bg-[#010101b3] w-full fixed">
      <div
        onClick={handleMenu}
        className={`navbar__layout ${
          show ? "show" : "hidden"
        } bg-black opacity-20 fixed top-0 bottom-0 left-0 right-0`}
      ></div>
      <div className="container">
        <div className="flex items-center justify-between">
          {width < 900 && (
            <div onClick={handleMenu}>
              <HiMenu className="text-[30px] text-white cursor-pointer" />
            </div>
          )}
          <div className="w-[120px] h-[36px] all:mx-auto all:my-0">
            <img src={imgs.logo} alt="" className="w-full h-full" />
          </div>
          <ul
            className={`navbar__menu ${width < 900 && (show ? "show" : "hidden")} text-[18px] z-[100] text-white gap-5 flex items-center justify-between md:w-[30%] sm:w-[50%] all:py-[20px] all:fixed all:justify-start all:items-start all:left-0 all:top-0 all:bottom-0 all:flex-col all:bg-black`}
          >
            <a
              href="/"
              className="py-[10px] rounded-md px-[16px] hover:bg-hover-color all:w-[100%]"
            >
              <li>HOME</li>
            </a>
            <a
              href="/"
              className="py-[10px] rounded-md px-[16px] hover:bg-hover-color all:w-[100%]"
            >
              <li>ABOUT</li>
            </a>
            <a
              href="/"
              className="py-[10px] rounded-md px-[16px] hover:bg-hover-color all:w-[100%]"
            >
              <li>WORK</li>
            </a>
            <a
              href="/"
              className="py-[10px] rounded-md px-[16px] hover:bg-hover-color all:w-[100%]"
            >
              <li>BLOG</li>
            </a>
            <a
              href="/"
              className="py-[10px] rounded-md px-[16px] hover:bg-hover-color all:w-[100%]"
            >
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
