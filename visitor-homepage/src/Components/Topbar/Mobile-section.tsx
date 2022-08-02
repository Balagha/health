import React from "react";
function MobileSection(){
    return(
        
        <div className="sm:hidden text-[#757575]" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                            <i className="text-[#a5c422] px-3 fa fa-phone"></i>
                            010-060-0160
                        </a>

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                        <i className="text-[#a5c422] px-3 fa-solid fa fa-calendar-plus-o"></i>
                            6:00 AM - 10:00 PM (Mon-Fri)
                        </a>

                        <a href="/#" className="text-#393939-300 hover:text-[#a5c422] px-3 py-2 text-sm font-medium">
                        <i className="text-[#a5c422] px-3 fa fa-envelope-o"></i>
                            info@company.com
                        </a>
                </div>
            </div>
            
    )
}
export default MobileSection;