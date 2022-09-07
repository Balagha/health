import { useState } from "react";

function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className=" text-[#757575] relative w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between p-2 items-center h-16">
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          {/* <MobileButton /> */}
          {/* Button start */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          {/* Button End */}
        </div>
        <div className=" flex-shrink-0 flex items-center">
          {/* <img
            className="block lg:hidden h-8 w-auto"
            src="logo.svg"
            alt="Workflow"
          />
          <img
            className="hidden lg:block h-9 w-auto"
            src="logo.svg"
            alt="Workflow"
          /> */}
          <img src="/images/H.png" className="online-block h-10" alt="" />
          <a href="/" className="text-[#757575] text-4xl font-black">
            EALTH
          </a>
        </div>
        <div className="hidden lg:flex md:static sm:block  gap-1 p-2">
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Doctors
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            News
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>

          <a
            href="/dashboard"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2  rounded-md text-sm font-medium"
          >
            DashBoard
          </a>

          <button
            type="button"
            className="bg-[#a5c422] p-1 rounded-md text-white hover:text-white hover:bg-[#4267b2]"
          >
            <a href="/#" className=" px-3 py-2 text-sm font-bold">
              Make an appointment
            </a>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`sm:hidden relative bg-white pl-4 duration-500 ${
          isOpen ? "left-0" : "left-[-100%]"
        }`}
        id="mobile-menu"
      >
        <div className="flex flex-wrap gap-2 p-2">
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Doctors
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            News
          </a>

          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>

          <a
            href="/dashboard"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            DashBoard
          </a>

          <button
            type="button"
            className="bg-[#a5c422] p-1 rounded-md text-white hover:text-white hover:bg-[#4267b2]"
          >
            <a href="/#" className=" px-3 py-2 text-sm font-bold">
              Make an appointment
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default DesktopNav;
