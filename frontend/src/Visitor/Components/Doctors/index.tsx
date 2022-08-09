import Doctor from "./Doctor";

function Doctors(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2">
            <h1 className="text-5xl font-bold pt-7 text-[#272727]">Our Doctors</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <Doctor name="Nate Baston" image="/images/team-image1.jpg" phone="010-020-0120" mail="general@company.com" designation="General Principal"/>
                <Doctor name="Jason Stewart" image="/images/team-image2.jpg" phone="010-070-0170" mail="pregnancy@company.com" designation="Pregnancy"/>
                <Doctor name="Miasha Nakahara" image="/images/team-image3.jpg" phone="010-040-0140" mail=" cardio@company.com" designation="Cardiology"/>
            </div>
        <br /><br />
        </div>
    )
}
export default Doctors;
