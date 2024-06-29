import { useState } from "react";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainDashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-96" : "w-20"
        } duration-300 h-screen bg-slate-500 relative `}
      >
        <img
          src="images/super-g.png"
          alt=""
          className="absolute cursor-pointer -right-3 top-9 w-7"
          onClick={() => setOpen(!open)}
        />
        <div
          className={`h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800`}
        >
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
                className="flex items-center bg-slate-900 text-white p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
          </ul>
        </div>
        <div className="w-[80%] flex flex-col  p-4 bg-gradient-to-r from-cyan-500 to-blue-500 m-auto rounded-3xl h-40">
          <div className="">
            <h1 className="text-center text-white font-bold">
              Upgrade to PRO to get access all Features!
            </h1>
            <button className="text-red font-bold block m-auto rounded-full bg-white px-10 py-3 mt-6">
              Get Pro Now!
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div>
          <img src="images/Ellipse 8.png" alt="" />
        </div>
        <div className="t">kldldkd</div>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="bg-slate-400 opacity-15 w-full h-screen"></div>
    </div>
  );
};

export default MainDashboard;
