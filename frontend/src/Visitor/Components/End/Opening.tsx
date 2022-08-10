function Opening(){
    return(
        <div className="grid grid-rows-2">
            <div className="row-span-2">
                <div className="font-bold text-2xl text-[#454545]">Opening Our</div>
                <br/>
                <text className="col-span-3 text-sm text-left text-[#757575]">Monday - Friday 06:00 AM - 10:00 PM<br/>Saturday 09:00 AM - 08:00 PM<br/>Sunday Closed</text>
                <br/>
                <a href="/#" target="_blank">
                    <img className="mt-[1rem] inline-block h-3" src="/images/facebook.png" alt="" />
                </a>
                <a href="/#" target="_blank">
                    <img className="mt-[1rem] ml-[1rem] inline-block h-4" src="/images/twitter.png" alt="" />
                </a>
                <a href="/#" target="_blank">
                    <img className="mt-[1rem] ml-[1rem] inline-block h-3" src="/images/instagram.png" alt="" />
                </a>
            </div>
            
        </div>
    )
}
export default Opening;