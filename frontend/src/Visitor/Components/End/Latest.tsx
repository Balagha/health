function Latest(){
    return(
        <div className="grid grid-rows-2">
            <div className="row-span-2">
                <div className="ml-1 font-bold text-2xl text-[#454545]">Latest News</div>
                <a href="/#" className="mt-[1.5rem] grid grid-cols-6 gap-0">
                            <img className="rounded-full object-fill w-[4rem] h-[4rem] relative" src="/images/news-image.jpg" alt=""/>
                            <text className="col-span-3 text-sm text-[#757575] flex justify-center items-center">Amazing Technology<br/>March 08, 2018</text>
                </a>
                <a href="/#" className="mt-[1rem] grid grid-cols-6 gap-0">
                            <img className="rounded-full object-fill w-[4rem] h-[4rem] relative" src="/images/news-image.jpg" alt=""/>
                            <text className="col-span-3 text-sm text-[#757575] flex justify-center items-center">New Healing Process<br/>February 20, 2018</text>
                </a>
            </div>
            
        </div>
    )
}
export default Latest;