function DesktopSection() {
  return (
    <nav>
      <div className=" text-[#757575] relative w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex justify-between p-2 items-center h-16">
        <div className=" flex-shrink-0 flex items-center">
          <a href="/#" className="text-#393939-300 text-sm">
            Welcome to a Professional Health Care
          </a>
        </div>
        <div className="hidden lg:flex md:static sm:block  gap-1 p-2">
          <a
            href="/#"
            className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium"
          >
            <img
              className="w-5 inline-block mr-3"
              src="/images/phone1.png"
              alt=""
            />
            010-060-0160
          </a>
          <a
            href="/#"
            className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium"
          >
            <img
              className="w-5 inline-block mr-3"
              src="/images/calender.png"
              alt=""
            />
            6:00 AM - 10:00 PM (Mon-Fri)
          </a>
          <a
            href="/#"
            className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium"
          >
            <img
              className="w-5 inline-block mr-3"
              src="/images/email.png"
              alt=""
            />
            info@company.com
          </a>
        </div>
      </div>
    </nav>
  );
}
export default DesktopSection;
