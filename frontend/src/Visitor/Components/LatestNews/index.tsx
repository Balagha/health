import Info from "./Info";

function Infos(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-[2rem] bg-[#f9f9f9]">
            <h1 className="text-5xl font-bold pt-7 text-[#454545] flex justify-center item-center">Latest News</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <Info image="/images/news-image1.jpg" date="March 08, 2018" title="About Amazing Technology" description="Maecenas risus neque, placerat volutpat tempor ut, vehicula et felis." name="Jeremie Carlson" designation="CEO / Founder" />
                <Info  image="/images/news-image2.jpg" date="February 20, 2018" title="Introducing a new healing process" description="Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula." name="Jason Stewart" designation="General Director" />
                <Info image="/images/news-image3.jpg" date="January 27, 2018" title="Review Annual Medical Research" description="Vivamus non nulla semper diam cursus maximus. Pellentesque dignissim." name="Andrio Abero" designation="Online Advertising" />
            </div>
        <br /><br />
        </div>
    )
}
export default Infos;