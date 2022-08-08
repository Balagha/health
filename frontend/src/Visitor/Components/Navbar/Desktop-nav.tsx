import MobileButton from "./Mobile-Button";

function DesktopNav(){
    return(
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                <MobileButton/>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                    <img className="block lg:hidden h-9 w-auto" src="logo.svg" alt="Workflow"/>
                    <img className="hidden lg:block h-9 w-auto" src="logo.svg" alt="Workflow"/>
                    <a href="App" className="text-[#757575] px-3 text-4xl font-black">HEALTH</a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className=" absolute right-0 flex space-x-4">

                        <a href="Slider" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"aria-current="page">Home</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Doctors</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">News</a>

                        <a href="/#" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        <a href="/dashboard" className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium">DashBoard</a>

                        <button type="button" className="bg-[#a5c422] p-2 rounded-md text-white hover:text-white hover:bg-[#4267b2]">
                            <a href="/#" className=" px-3 py-2 text-sm font-bold">Make an appointment</a>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default DesktopNav;
