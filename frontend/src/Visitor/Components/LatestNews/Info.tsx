function Info({image}: {image: string}){
    return(
        <div className="px-4">
                    <div className="rounded-md bg-[white]" data-wow-delay="1.0s">
                        <a href="/#">
                            <img className="h-[250px] w-[410px]" src={image} alt="" />
                        </a>
                        <p className="mt-[1rem] text-[#757575] px-6 text-left">February 20, 2018</p>
                        <a href="/#">
                            <h1 className="text-2xl text-left px-6 font-bold">Introducing a new<br/>healing process</h1>
                        </a>
                        <p className="text-[#757575] px-6 pb-6 text-left">Fusce vel sem finibus, rhoncus massa non,<br/>aliquam velit. Nam et est ligula.</p>
                        <hr /><br/>
                        <div className="grid grid-rows-2 grid-flow-col gap-0">
                            <div className="grid grid-cols-6 gap-0">
                                <img className="row-span-2 ml-[1rem] h-[3rem] w-[3rem] rounded-full" src="/images/author-image.jpg" alt="" />
                                <div className="ml-[1rem] col-span-5 text-left">Jason Stewart
                                </div>
                                <div className="ml-[1rem] col-span-5 text-left text-[#757575]">General Director
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default Info;
