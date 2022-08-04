import Doctor from "./Doctor";

function Doctors(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2">
            <h1 className="text-5xl font-bold pt-7 text-[#272727]">Our Doctors</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <Doctor image="/images/team-image1.jpg"/>
                <Doctor image="/images/team-image2.jpg"/>
                <Doctor image="/images/team-image3.jpg"/>
            </div>
        <br /><br />
        </div>
    )
}
export default Doctors;
