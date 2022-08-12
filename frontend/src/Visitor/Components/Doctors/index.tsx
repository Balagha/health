import Doctor from "./Doctor";

function Doctors(){
    return(
        <div className="max-w-7xl mx-auto pt-10 mb-20 px-2 sm:px-6 lg:px-2">
            <h1 className="text-center text-5xl pb-10 font-bold pt-7 text-[#272727]">Our Doctors</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ">
                <Doctor name="Nate Baston" image="/images/team-image1.jpg" phone="010-020-0120" mail="general@company.com" designation="General Principal"/>
                <Doctor name="Jason Stewart" image="/images/team-image2.jpg" phone="010-070-0170" mail="pregnancy@company.com" designation="Pregnancy"/>
                <Doctor name="Miasha Nakahara" image="/images/team-image3.jpg" phone="010-040-0140" mail=" cardio@company.com" designation="Cardiology"/>
            </div>
        </div>
    )
}
export default Doctors;
