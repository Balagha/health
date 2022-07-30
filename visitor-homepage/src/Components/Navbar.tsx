import React from 'react';
import healthIcon from '../images/logo.svg';
function Navbar(){
    return(
            <nav className="">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">

                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-9 w-auto" src={healthIcon} alt="Workflow"/>
                    <img className="hidden lg:block h-9 w-auto" src={healthIcon} alt="Workflow"/>
                    <a href="/#" className="text-#393939-300 px-3 text-9lx font-black">HEALTH</a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className=" absolute right-0 flex space-x-4">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                        <a href="Slider" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"aria-current="page">Home</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Doctors</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                        <button type="button" className="bg-[#a5c422] p-2 rounded-md text-white hover:text-white hover:bg-[#4267b2]">
                    <a href="/#" className=" px-3 py-2 text-sm font-bold">Make an appointment</a>
                    </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* 
            <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"aria-current="page">Home</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Doctors</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>

                        <button type="button" className="bg-[#a5c422] p-2 rounded-md text-white hover:text-white hover:bg-[#4267b2]">
                    <a href="/#" className=" px-3 py-2 text-sm font-bold">Make an appointment</a>
                    </button>
                </div>
            </div>
            </nav>
    );
};

export default Navbar;