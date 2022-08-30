// import MobileButton from "./Mobile-Button";

function DesktopNav() {
  return (
    <nav>
      <div className="w-full flex justify-between p-2 items-center">
        <div className="flex-shrink-0 flex items-center">
          <img src="/images/H.png" className="online-block h-10" alt="" />
          <a href="/" className="text-[#757575] text-4xl font-black">
            EALTH
          </a>
        </div>
        <div className="hidden md:flex sm:block  gap-2 p-2">
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
            className="bg-[#a5c422] p-2 rounded-md text-white hover:text-white hover:bg-[#4267b2]"
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
