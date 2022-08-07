function Footer(){
    return(
        <div className="mb-[3rem] mt-[1rem]">
            <div className="w-[75rem] mb-[2rem]">
                <hr/>
            </div>
            <div className="hidden sm:block sm:ml-6 mb-[4rem]">
                    <div className="absolute left-[4rem] flex space-x-4">

                        <text className="px-3 py-2 text-sm text-[#757575] mr-[4rem] font-bold">Copyright © 2018 Your Company | Design: Tooplate</text>

                        <a href="/#" className="px-1 py-2 text-sm text-[#757575] font-bold">Laboratory Tests</a>

                        <a href="/#" className="px-1 py-2 text-sm text-[#757575] font-bold">Departments</a>

                        <a href="/#" className="px-1 py-2 text-sm text-[#757575] font-bold">Insurance Policy</a>

                        <a href="/#" className="px-1 py-2 text-sm text-[#757575] font-bold">Careers</a>
                    </div>
            </div>
        </div>
    )
}
export default Footer;