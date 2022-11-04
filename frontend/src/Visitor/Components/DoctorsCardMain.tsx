import React, {useEffect, useState} from 'react'
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import DoctorsRating from "./DoctorsRating";
import SearchDoctor from "./SearchDoctor/searchDoctor";
import {Link, To, useLocation} from "react-router-dom";


function DoctorsCardMain() {
    const [doctors, setDoctors] = useState([])
    const [searchDoctor, setSearchDoctor] = useState([])
    const search = useLocation().search;
    const query = new URLSearchParams(search).get('search');
    console.log("get query from doctor card", query);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8081/api/doctor/',{method:'GET',credentials: 'include'})
            .then((res) => res.json())
            .then((result) => {
                setDoctors(result)
                setSearchDoctor(result)
                console.log(doctors)

            })
            .catch((err)=>alert("Please Login First"))
    }, [])
        console.log(searchDoctor)


/*    const cardSearch = (searchDoctor: any)=> {
        return searchDoctor.filter((item: any) => {
                    return item['user']['first_name']
                        .toString()
                        .toLowerCase()
                        .includes(query?.toLowerCase())

            });
        }*/



    return (
        <>
            <Topbar/>
            <Navbar/>
            <SearchDoctor/>
            {doctors.length === 0 ?
                <>
                    <div className="flex items-center justify-center ">
                        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                    </div>
                </> :
                <div className="flex flex-row flex-wrap mt-1 mb-2 justify-center">
                    {doctors.map((item:any ,index:any) => (
                        <div key={item.id} className="m-1 w-full max-w-sm bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-row items-center justify-center">
                                <div className="flex flex-col w-[50%]">
                                    <img className="p-8 w-80 h-40 rounded-full" src="/images/doctor.png" alt="doctor image"/></div>
                                <div className="flex flex-col p-2 w-[50%]">
                                    <h2 className="text-left break-words">{item.doctor_specialization.specialization}</h2></div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col px-3 pb-2 w-[50%]">
                                    <div className="flex flex-row">
                                        <div>
                                            <a href="src/Visitor/Components/doctorsCardMain#">
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white break-words">{item.user.first_name + ' '+item.user.last_name} </h5>
                                            </a>
                                            <DoctorsRating/>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <Link to={`/appointment`}
                                                state={{ doctor_id: item.id}} // <-- state prop
                                           className="text-white bg-[#A5C52C] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                                            Appoinment
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex p-2 flex-col w-[50%]">
                                    <h2 className="text-left">{item.user.contact_number}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
export default DoctorsCardMain;