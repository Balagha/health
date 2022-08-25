import React from 'react'
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import DoctorsRating from "./DoctorsRating";

function DoctorsCardMain() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <div className="flex flex-row flex-wrap mt-10 justify-center">
                <div className="m-1 h-full w-full max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-col">
                            <img className="p-8 w-80 h-40 rounded-full" src="/images/doctor.png" alt="doctor image"/>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-left">MBBS, MFILL, (Microbiology), MCPS, FCPS (Psychiatry)</h2>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col px-5 pb-5">
                            <div className="flex flex-row">
                                <div>
                                    <a href="src/Visitor/Components/doctorsCardMain#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">DR. Munna Bhai</h5>
                                    </a>
                                    <DoctorsRating/>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="src/Visitor/Components/doctorsCardMain#"
                                   className="text-white bg-[#A5C52C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Appoinment
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-bold">Hospitals</h2>
                            <h1>Dhaka Medical College</h1>
                            <h1>Popular Diagnostic</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
)
}
export default DoctorsCardMain;