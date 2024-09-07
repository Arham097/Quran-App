import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const headerLinks = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    if (!toggle) return;
    gsap.from(headerLinks.current.children, {
      x: -150,
      duration: 2,
      ease: "power4.out",
      stagger: 0.1,
    });
  }, [toggle]);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="w-full h-16 mx-auto flex flex-col justify-between items-center bg-gradient-to-r from-teal-800 to-teal-600 px-1">
        <div className="w-full h-full flex justify-between items-center ">
          <div className="flex gap-x-3 ml-5 items-center ">
            <img src="./../public/koran.png" alt="" width={40} height={40} />
            <h1 className="text-3xl font-bold mt-1 max-md:text-xl max-sm:text-[1rem] text-white transition-all duration-150 ease-linear">
              Al-Quran
            </h1>
          </div>
          <nav className="mr-5 max-md:hidden">
            <ul className="flex gap-x-12 font-bold pt-2 max-lg:gap-x-10 text-lg  ">
              <li className="hover:text-teal-400 text-white transition-all duration-200 ease-linear">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-teal-400  text-white transition-all duration-200 ease-linear">
                <Link to="/read-quran">Read Quran</Link>
              </li>
              <li className="hover:text-teal-400  text-white transition-all duration-200 ease-linear">
                <Link to="/bookmarks">Bookmarks</Link>
              </li>
              <li className="hover:text-teal-400  text-white transition-all duration-200 ease-linear">
                <Link to="/settings">Setting</Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            {!toggle ? (
              <IoMenu
                className="text-[35px] mr-5 text-white"
                onClick={toggleMenu}
              />
            ) : (
              <RxCross2
                className="text-[35px] mr-5 rotate-360 text-white"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </header>

      {/* Conditionally Rendered Div */}
      {toggle && (
        <div className="w-full bg-teal-600 flex flex-col transition-all duration-1000 ease-in-out">
          <nav clas>
            <ul
              className="flex flex-col gap-y-2 font-bold py-2 text-white "
              ref={headerLinks}
            >
              <li className="hover:text-teal-400 border-b-2 px-4 py-2">
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-teal-400 border-b-2 px-4 py-2">
                <Link to="/about" onClick={toggleMenu}>
                  Read Quran
                </Link>
              </li>
              <li className="hover:text-teal-400 border-b-2 px-4 py-2">
                <Link to="/post-property" onClick={toggleMenu}>
                  BookMarks
                </Link>
              </li>
              <li className="hover:text-teal-400 px-4 py-1">
                <Link to="/contact" onClick={toggleMenu}>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
