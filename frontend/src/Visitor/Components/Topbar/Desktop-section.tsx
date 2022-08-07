function DesktopSection(){
    return(
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-[#757575]">
                <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                    <a href="/#" className="text-#393939-300 text-sm">Welcome to a Professional Health Care</a>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                    <div className=" absolute right-0 flex space-x-4">

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                            <i className="text-[#a5c422] px-3 fa fa-phone"></i>
                            <img className="w-5 inline-block mr-3" src="/images/phone1.png" alt="" />
                            010-060-0160
                        </a>

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                        <i className="text-[#a5c422] px-3 fa-solid fa fa-calendar-plus-o"></i>
                            <img className="w-5 inline-block mr-3" src="/images/calender.png" alt="" />
                            6:00 AM - 10:00 PM (Mon-Fri)
                        </a>

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                        <i className="text-[#a5c422] px-3 fa fa-envelope-o"></i>
                        <img className="w-5 inline-block mr-3" src="/images/email.png" alt="" />
                            info@company.com
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default DesktopSection;
