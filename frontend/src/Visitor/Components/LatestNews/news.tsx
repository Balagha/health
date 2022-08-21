interface Infoprops {
    image: string;
    title: string;
    date: string;
    description: string;
    name: string;
    designation: string;
  }
function News(props: Infoprops){
    return(
        <div className="px-4">
                    <div className="rounded-md bg-[white]" data-wow-delay="1.0s">
                            <img className="h-[250px] w-[410px]" src={props.image} alt="" />
                        <p className="mt-[1rem] text-[#757575] px-6 text-left">{props.date}</p>
                        <a href="/#">
                            <h1 className="text-3xl text-left px-6 font-black">{props.title}</h1>
                        </a>
                        <p className="text-[#757575] px-6 pb-6 text-left">{props.description}</p>
                        <hr /><br/>
                        <div className="grid grid-rows-2 grid-flow-col gap-0">
                            <div className="grid grid-cols-6 gap-0">
                                <img className="row-span-2 ml-[1rem] h-[3rem] w-[3rem] rounded-full" src="/images/author-image.jpg" alt="" />
                                <div className="ml-[1rem] col-span-5 text-left">{props.name}
                                </div>
                                <div className="ml-[1rem] col-span-5 text-left text-[#757575]">{props.designation}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default News;
