import BloodGroupSection from "./BloodGroupSection";
import DoctorImage from "./DoctorImageSection";
function TopSection (){
    return(
        <div className="grid grid-cols-3 ">
            <div className="ml-8 mt-10 col-span-2"><BloodGroupSection/></div>
            <div className="mt-20 ml-6"><DoctorImage/></div>
        </div>
    )
}

export default TopSection;