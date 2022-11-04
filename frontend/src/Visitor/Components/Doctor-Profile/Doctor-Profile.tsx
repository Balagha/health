import Footer from "../footer";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import ResponsiveDateTimePickers from "./Calendar";
import InfoSection from "./Info-Section";
import React from "react";

function DoctorProfile (){
    return(
        <div>
            <Topbar/>
            <Navbar/>    
            <div className="b1g-[#F5F5F5] h-full-r w-full flex flex-col absolute justify-center items-center">
                {/* <div className="mt-10 h-40-r w-40-r bg-gradient-to-r from-pink-500 to-pink-300
                rounded-full -left-72 top-1/4 absolute"/>
                <div className="h-35-r w-35-r absolute bg-gradient-to-tl from-blue-700 to-blue-400 rounded-full -right-[15%] top-[12%]"/> */}
                    <div className="mt-[3rem] w-50-r h-[full] container relative bg-[#D8D8D8] backdrop-filter bg-opacity-30 backdrop-blur-md shadow-lg rounded-2xl text-black-600 justify-center items-center ">
                        <div className="grid grid-cols-3 ">
                            <div className="ml-8 mt-10 col-span-2">
                                <div className="m-7">

                                <div className="m-7">
                                    <text className="text-red-600/100 text-5xl font-bold">
                                        o
                                        <sup className="text-3xl">+</sup>
                                    </text>
                                    <br/><br/>
                                    <text >
                                        <span className="text-3xl font-bold">Dr. Paul Petelin</span>
                                        <br/>
                                        <span className="text-lg font-bold">Medicine Specialist</span>
                                        <br/>
                                        <br/>
                                    </text>
                                    <div className="ml-4 leading-3">
                                        <text className="text-[12px]">
                                            Degrees: MBBS (DMC)<br/>
                                            FCPS (Medicine)<br/>
                                            MD (Endocrinology)BIRDEM<br/>
                                            FRCP (London)<br/>
                                            FRCP (Edinburgh), FRCP (Glasgow)<br/>
                                            FRCP (Ireland),<br/>
                                            FACE (USA), FACP (USA)<br/>
                                            Associate professor (Medicine)DMC
                                            {/* <button className="ml-5 bg-[#258AFF] hover:bg-[#258AFF] text-white font-bold py-1 px-4 rounded">
                                     edit
                                </button> */}
                                        </text>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="leading-4">
                                        <text className="text-[12px] leading-3">
                                            Your profile info in our services.<br/>
                                            Personal info and options to manage it. You can make some of this info like your contact details, visible to others
                                            so they can reach you easily.<br/><br/>
                                            Address: Medina, Washington, United States
                                        </text>
                                    </div>
                                </div>

                            </div>
                            </div>
                            <div className="mt-20 ml-6">
                                <div className="relative w-[10rem] h-[40]" >
                                <img className="rounded-3xl object-fill h-[12rem] relative" src="/images/doctor.jpeg" alt="person"/>
                                <div className="bg-[#D9D9D9] opacity-70 rounded-3xl absolute inset-x-0 bottom-0 h-10">
                                </div>
                                <img className="ml-16 opacity-80 absolute inset-x-0 bottom-2 h-6" src="/images/camera.png" alt="camera"/>
                                </div>
                            </div>
                        </div>
                        <InfoSection/>
                    <div className="mt-[5%] w-[79.5%] ml-[9%]">
                    <ResponsiveDateTimePickers/>
                    </div>
                        <br/> <br/> 
                    </div>
                <br/>
            </div>
            <div className="mt-[92%]">
            <Footer/>
            </div>
        </div>
    )
}

export default DoctorProfile;