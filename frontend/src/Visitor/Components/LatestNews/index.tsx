import Info from "./Info";

function Infos(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2 bg-[#f9f9f9]">
            <h1 className="text-5xl font-bold pt-7 text-[#454545] flex justify-center item-center">Latest News</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <Info image="/images/news-image1.jpg"/>
                <Info  image="/images/news-image2.jpg"/>
                <Info image="/images/news-image3.jpg"/>
            </div>
        <br /><br />
        </div>
    )
}
export default Infos;