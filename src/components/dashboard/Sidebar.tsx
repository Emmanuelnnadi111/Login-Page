import { useState } from "react";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/login");
  };
  const [open, setOpen] = useState(false);
  return (
    <div className=" h-screen   ">
      <div className={`${open ? "sm:w-96" : "w-20"} duration-300   relative `}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className={`${
            !open && "rotate-180"
          } absolute cursor-pointer -right-3 top-9 w-6 rounded-full bg-borderCol h-6  text-white`}
          onClick={() => setOpen(!open)}
        />
        <div className={`h-full px-3 py-4 bg-gray-50 `}>
          <div className="flex py-10 px-4 space-x-3 items-center">
            <img src="images/setting 1.png" alt="" />
            <h1 className={`${!open && "hidden"} text-3xl  font-bold`}>
              Dashboard <span className="text-xs text-dbTextCol">v.01</span>
            </h1>
          </div>
          <ul className="space-y-6 font-medium px-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/key-square.png" alt="" />
                <span
                  className={`${!open && "hidden"} flex-1 ms-5 text-dabTextCol`}
                >
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/3d-square 1.png" alt="" />
                <span
                  className={`${
                    !open && "hidden"
                  } flex-1 ms-5 text-dbTextCol items-center text-dabTextCol`}
                >
                  Product
                </span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`${
                    !open && "hidden"
                  } xl:text-dabTextCol items-center`}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center bg-borderCol text-white p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/user.png" alt="" />
                <span className={`${!open && "hidden"} flex-1 ms-5`}>
                  Customers
                </span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`${
                    !open && "hidden"
                  } xl:text-dabTextCol items-center`}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-dabTextCol  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/wallet-money 2.png" alt="" />
                <span className={`space-x-6 ${!open && "hidden"} flex-1 ms-5`}>
                  Income
                </span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`${
                    !open && "hidden"
                  } xl:text-dabTextCol items-center`}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-dabTextCol  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/discount-shape 1.png" alt="" />
                <span className={`${!open && "hidden"} flex-1 ms-5`}>
                  Promote
                </span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`${
                    !open && "hidden"
                  } xl:text-dabTextCol items-center`}
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-dabTextCol rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img src="images/message-question 1.png" alt="" />
                <span className={`${!open && "hidden"} flex-1 ms-5`}>Help</span>
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className={`${
                    !open && "hidden"
                  } xl:text-dabTextCol items-center`}
                />
              </a>
            </li>
            <li>
              <a className="flex items-center text-dabTextCol rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className={`${
                    open && "hidden"
                  } items-center bg-borderCol text-white px-4 py-2 rounded-lg`}
                  onClick={goBack}
                />
                <button
                  onClick={goBack}
                  className={`${
                    !open && "hidden"
                  } bg-borderCol text-white py-2 w-10 rounded-xl flex-1 `}
                >
                  Log Out
                </button>
              </a>
            </li>
          </ul>

          <div
            className={`${
              !open && "hidden"
            } w-[80%] flex flex-col bg-white  p-4 bg-gradient-to-r from-linearBg to-linearBgS m-auto rounded-3xl h-40 mt-32`}
          >
            <div className="">
              <h1 className="text-center text-white font-bold">
                Upgrade to PRO to get access all Features!
              </h1>
              <button className="text-btnTextCol font-bold block m-auto rounded-full bg-white px-10 py-3 mt-6">
                Get Pro Now!
              </button>
            </div>
            <div className="flex justify-between w-60 m-auto pl-4 py-20">
              <div className={` flex space-x-4`}>
                <img src="images/Ellipse 8.png" alt="" className="" />
                <div className={`${!open && "hidden "} `}>
                  <h1 className="font-bold">Evano</h1>
                  <p className="text-xs text-dbCol">Project Manager</p>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faAngleDown}
                className={`${!open && "hidden"} text-dbCol `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
