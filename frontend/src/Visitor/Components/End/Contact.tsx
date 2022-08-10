function Contact(){
    return(
        <div className="grid grid-rows-2">
            <div className="ml-[2.5rem]">
                <span className="font-bold text-2xl text-[#454545]">Contact Info</span>
                <br/><br/>
                <span className="font-normal text-sm text-[#757575]">Fusce at libero iaculis, venenatis augue quis,<br/>pharetra lorem. Curabitur ut dolor eu elit<br/>consequat ultricies.</span>
            </div>
            <div className="ml-[2.5rem] mt-[1rem]">
                <div className="bg-cover flex justify-left items-center">
                <img className="h-[2rem] w-[2rem]" src="/images/phone.png" alt="" />
                 <span className="text-[#757575] ml-[0.5rem]">010-060-0160 </span>
                </div>
                <div className="bg-cover flex justify-left items-center">
                <img className="h-[2rem] w-[2rem]" src="/images/gmail.png" alt="" />
                    <span className="text-[#757575] ml-[0.5rem]">info@company.com </span>
                </div>
            </div>
        </div>
    )
}
export default Contact;