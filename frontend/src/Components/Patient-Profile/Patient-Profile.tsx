import React from 'react';
import BloodGroupSection from "./BloodGroupSection";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import AppointmentSection from "./AppointmentSection";
import PrescriptionSection from "./PrescriptionSection";
import PatientImage from "./PatientImageSection";
import About from "./About";

function PatientProfile (){
    return(
        <div>
            <div className="b1g-[#F5F5F5] h-full-r w-full flex flex-col 
            absolute overflow-x-hidden justify-center items-center">
                <div className="mt-10 h-40-r w-40-r bg-gradient-to-r from-pink-500 to-pink-300
                 rounded-full -left-72 top-1/4 absolute"></div>
                <div className="h-35-r w-35-r absolute bg-gradient-to-tl from-blue-700 to-blue-400 rounded-full -right-[15%] top-[3%]">
                </div>
                    <div className="mt-[9rem] w-50-r h-[73rem] container relative bg-[#D8D8D8]
                    backdrop-filter bg-opacity-30 backdrop-blur-md shadow-2xl rounded-2xl 
                    text-black-600 justify-center items-center ">
                        <div className="grid grid-cols-3 divide-x-[0px] gap-0">
                            <div className="ml-8 mt-10 col-span-2"><BloodGroupSection/></div>
                            <div className="mt-20 ml-6"><PatientImage/></div>
                        </div>
                            <div>
                                <BasicInfo/>
                                <ContactInfo/>                   
                            </div>
                        <div className="grid grid-cols-2 divide-x-[0px] gap-0">
                            <div className="ml-2"><AppointmentSection/></div>
                            <div className="ml-3"><PrescriptionSection/></div>
                        </div>
                        <br/>
                    </div>
                <br/>  
                <About/>                
            </div>          
        </div> 
    )
}

export default PatientProfile;