import MobileButton from "./Mobile-Button";

function MobileNav() {
  return (
    <div className="md:hidden" id="mobile-menu">
      <ul className="flex flex-col gap-2 p-2">
        <li>
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Doctors
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            News
          </a>
        </li>
        <li>
          <a
            href="/#"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/dashboard"
            className="text-#393939-300 hover:bg-[#a5c422] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            DashBoard
          </a>
        </li>
        <li>
          <button
            type="button"
            className="bg-[#a5c422] p-1 rounded-md text-white hover:text-white hover:bg-[#4267b2]"
          >
            <a href="/#" className=" px-3 py-2 text-sm font-bold">
              Make an appointment
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default MobileNav;
