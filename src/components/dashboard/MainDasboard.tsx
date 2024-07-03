import { useState } from "react";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowRightFromBracket,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const MainDashboard = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/login");
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen">
      <div className=" h-screen   ">
        <div
          className={`${open ? "sm:w-96" : "w-20"} duration-300   relative `}
        >
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
                    className={`${
                      !open && "hidden"
                    } flex-1 ms-5 text-dabTextCol`}
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
                  <span
                    className={`space-x-6 ${!open && "hidden"} flex-1 ms-5`}
                  >
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
                  <span className={`${!open && "hidden"} flex-1 ms-5`}>
                    Help
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

      <div className=" hidden sm:block bg-slate-400 bg-opacity-15 h-screen w-full py-10 px-20">
        <div className="flex justify-between ">
          <h1 className="font-bold text-3xl">Hello Evano 👋,</h1>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-full p-3 ps-10 text-sm text-gray-900 outline-none border-0 rounded-lg bg-gray-50 shadow-lg  "
              placeholder="Search"
              required
            />
          </div>
        </div>
        <div className=" mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 items-center justify-center w-full h-40 rounded-3xl shadow-lg bg-white">
            <div className="wrap flex space-x-6">
              <div className="image">
                <img src="images/Group 10.png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Total Customers</p>
                <h2 className="font-bold text-4xl text-textCol">5,423</h2>
                <span className="text-green-500">
                  <FontAwesomeIcon icon={faArrowUp} /> 16%
                  <span className="text-base text-textCol">this month</span>
                </span>
              </div>
              <div className="border-r border-border-dbCol"></div>
            </div>
            <div className="wrap flex space-x-6">
              <div className="image">
                <img src="images/Group 10 (1).png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Members</p>
                <h2 className="font-bold text-4xl text-textCol">1,893</h2>
                <span className="text-red-700">
                  <FontAwesomeIcon icon={faArrowDown} /> 16%
                  <span className="text-base text-textCol">this month</span>
                </span>
              </div>
              <div className="border-r border-border-dbCol"></div>
            </div>
            <div className="wrap flex space-x-6">
              <div className="image">
                <img src="images/Group 10 (2).png" alt="" />
              </div>
              <div className="text">
                <p className="text-dbCol">Active Now</p>
                <h2 className="font-bold text-4xl text-textCol">189</h2>
                <div className="flex -space-x-2">
                  <img src="images/Ellipse 58.png" alt="" />
                  <img src="images/Ellipse 59.png" alt="" />
                  <img src="images/Ellipse 60.png" alt="" />
                  <img src="images/Ellipse 61.png" alt="" />
                  <img src="images/Ellipse 62.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen  shadow-lg rounded-3xl mt-10  bg-white">
          <div className="flex flex-col sm:flex-row p-10 justify-between">
            <div className="">
              <h1 className="text-3xl font-bold">All Customers</h1>
              <h2 className="text-base text-activeCol">Active Members</h2>
            </div>
            <div className="flex space-x-5">
              <label
                htmlFor="default-search"
                className="mb-5 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className=" w-full p-3 ps-10 text-sm text-gray-900 outline-none border-0 rounded-lg bg-gray-50 shadow-lg  "
                  placeholder="Search"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="flex flex-col sm:flex-row items-center border-0 px-2 py-1 bg-gray-50 shadow-lg rounded-lg">
                  <p className="text-sm text-gray-500">Short by:</p>

                  <select
                    name="newest"
                    id="newest"
                    className="outline-none border-0 text-sm font-bold bg-gray-50"
                  >
                    <option value="New">Newest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen ">
            <div className="flex flex-col sm:flex-row px-10 justify-between font-semibold border-b  pb-2 ">
              <h2 className="text-dbCol ">Customer Name</h2>
              <h2 className="text-dbCol ">Company</h2>
              <h2 className="text-dbCol">Phone Number</h2>
              <h2 className="text-dbCol">Email</h2>
              <h2 className="text-dbCol">Country</h2>
              <h2 className="text-dbCol">Status</h2>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b   pb-4 py-2 items-center font-semibold">
              <p>Jane Cooper</p>
              <p>Microsoft</p>
              <p>(255) 555-0118</p>
              <p>jane@microsoft.com</p>
              <p>United States</p>
              <button className="bg-backgroundActiveGreen text-activeGreen px-6 py-2 rounded-md border border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between text-base border-b   pb-4 py-2 items-center font-semibold">
              <p>Floyd Miles</p>
              <p>Yahoo</p>
              <p>(205) 555-0100</p>
              <p>floyd@yahoo.com</p>
              <p>Kiribati</p>
              <button className="bg-backgroundActiveRed text-activeRed px-4 py-2 rounded-md border border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b   pb-2 py-2 items-center font-semibold">
              <p>Ronald Richards</p>
              <p>Adobe</p>
              <p>(302) 555-0107</p>
              <p>ronald@adobe.com</p>
              <p>Israel</p>
              <button className="bg-backgroundActiveRed text-activeRed px-4 py-2 rounded-md border border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b   pb-2 py-2 items-center font-semibold">
              <p>Marvin McKinney</p>
              <p>Tesla</p>
              <p>(252) 555-0126</p>
              <p>marvin@tesla.com</p>
              <p>Iran</p>
              <button className="bg-backgroundActiveGreen text-activeGreen px-6 py-2 rounded-md border border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b   pb-2 py-2 items-center font-semibold">
              <p>Jerome Bell</p>
              <p>Google</p>
              <p>(629) 555-0129</p>
              <p>jerome@google.com</p>
              <p>Reunion</p>
              <button className="bg-backgroundActiveGreen text-activeGreen px-6 py-2 rounded-md border border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b   pb-2 py-2 items-center font-semibold">
              <p>Kathryn Murphy</p>
              <p>Microsoft</p>
              <p>(406) 555-0120</p>
              <p>kathryn@microsoft.com</p>
              <p>Curacao</p>
              <button className="bg-backgroundActiveGreen text-activeGreen px-6 py-2 rounded-md border border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between border-b    py-2 items-center font-semibold">
              <p>Jacob Jones</p>
              <p>Yahoo</p>
              <p>(208) 555-0112</p>
              <p>jacob@yahoo.com</p>
              <p>Brazil</p>
              <button className="bg-backgroundActiveGreen text-activeGreen px-6 py-2 rounded-md border border-activeGreen">
                Active
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  px-10 justify-between font-semibold py-2 items-center ">
              <p>Kristin Watson </p>
              <p>Facebook</p>
              <p>(704) 555-0127</p>
              <p>kristin@facebook.com</p>
              <p>Aland Islands</p>
              <button className="bg-backgroundActiveRed text-activeRed px-4 py-2 rounded-md border border-activeRed">
                Inactive
              </button>
            </div>
            <div className="flex justify-between px-10 mt-5">
              <p className="text-dbCol text-base">
                Showing data 1 to 8 of 256k entries
              </p>

              <nav aria-label="Page navigation example">
                <ul className="flex items-center space-x-3 h-8 text-sm">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180 rounded-md"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-white  bg-borderCol border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex rounded-md items-center justify-center px-3 h-8 leading-tight  border text-dbCol  hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex rounded-md items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-2.5 h-2.5 rtl:rotate-180 rounded-md"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
