import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

const MainDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* navbar component */}
      <Sidebar />
      <div className=" bg-slate-400 bg-opacity-15 w-screen px-5 h-screen py-10 md:px-20">
        {/* Header */}
        <div className=" md:flex justify-between border-2 ">
          <h1 className="font-bold text-xl pb-4 md:text-3xl md:pb-0">
            Hello Evano 👋,
          </h1>

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

        <div className=" mt-10  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 items-center justify-center w-full  gap-10 py-10 rounded-3xl shadow-lg bg-white">
            <div className="wrap md:flex md:space-x-6">
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
            <div className="wrap md:flex md:space-x-6">
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
            <div className="wrap  md:flex md:space-x-6">
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

        <div className="h-screen   shadow-lg rounded-3xl mt-10  bg-white">
          <div className="md:flex flex-col sm:flex-row p-10 justify-between ">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">All Customers</h1>
              <h2 className="text-base text-activeCol ">Active Members</h2>
            </div>
            <div className="md:flex md:space-x-5">
              <label
                htmlFor="default-search"
                className="mb-5 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative ">
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
              <div className="">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="flex mt-4 md:mt-0 md:flex  items-center border-0 px-2 py-1 bg-gray-50 shadow-lg rounded-lg">
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
          <div className="shadow-lg bg-white rounded-xl">
            <div className="md:flex  px-10 justify-between font-semibold border-b  pb-2 ">
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
            <div className="shadow-lg rounded-xl bg-white h-screen md:flex justify-between px-10 mt-5">
              <p className="text-dbCol text-base">
                Showing data 1 to 8 of 256k entries
              </p>

              <nav aria-label="shadow-lg rounded-xl bg-white   Page navigation example">
                <ul className="shadow-lg rounded-xl bg-white   flex flex-wrap items-center md:space-x-3 h-8 text-sm">
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
