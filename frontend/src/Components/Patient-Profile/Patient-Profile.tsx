import React from 'react';
import BloodGroupSection from "./BloodGroupSection";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import AppointmentSection from "./AppointmentSection";
import PrescriptionSection from "./PrescriptionSection";
import PatientImage from "./PatientImageSection";
// import Navbar from "./Components/Navbar";

function PatientProfile (){
    return(
        <div>
            <div className="bg-[#F5F5F5] h-70-r w-full flex flex-col 
            absolute overflow-x-hidden justify-center items-center">
                {/* <Navbar/>                */}
                <div className="h-40-r w-40-r bg-gradient-to-r from-pink-500 to-pink-300
                 rounded-full -left-72 top-1/4 absolute" style={{marginTop:'100px'}}></div>
                <div className="h-40-r w-40-r bg-gradient-to-tl from-blue-700 to-blue-400 
                rounded-full -right-1/4 -top-10 absolute" style={{marginTop:'100px'}}>
                </div>
                    <div className="mt-8 w-50-r h-80-r container relative bg-white 
                    backdrop-filter bg-opacity-50 backdrop-blur-md shadow-2xl rounded-3xl 
                    text-blue-500 justify-center items-center " style={{height:'1100px'}}>
                        <table style={{margin:'25px'}}>
                            <tr>
                                <td><BloodGroupSection/></td>
                                <td><PatientImage/></td>
                            </tr>
                        </table>
                        <div>
                            <BasicInfo/>
                            <ContactInfo/>                   
                        </div>
                        <table>
                            <tr>
                                <td><AppointmentSection/></td>
                                <td><PrescriptionSection/></td>
                            </tr>
                        </table> 
                    </div>
                <br/>                
            </div>
        </div> 
    )
}

export default PatientProfile;