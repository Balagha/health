import React from "react";
function MobileNav(){
    return(
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
    )
}
export default MobileNav;