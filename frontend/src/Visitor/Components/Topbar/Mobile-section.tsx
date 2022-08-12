function MobileSection(){
    return(
        
        <div className="sm:hidden text-[#757575]">
                <div className="px-1 pb-4 space-y-1">
                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                            <img className="w-5 inline-block mr-3" src="/images/phone1.png" alt="" />
                            010-060-0160
                        </a>

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] pl-10 py-2 text-sm font-medium">
                        <img className="w-5 inline-block mr-3" src="/images/calender.png" alt="" />
                            6:00 AM - 10:00 PM (Mon-Fri)
                        </a>

                        <a href="/#" className="flex justify-center text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                        <img className="w-5 inline-block mr-3" src="/images/email.png" alt="" />
                            info@company.com
                        </a>
                </div>
            </div>
            
    )
}
export default MobileSection;
