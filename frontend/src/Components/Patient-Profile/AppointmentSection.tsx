import React from 'react';
function AppointmentSection (){
    return(
            <div className="ml-16 mt-12 box-border relative h-[12rem] w-[19rem] bg-[#FFFFFF]
            backdrop-filter bg-opacity-30 shadow-2xl rounded-lg text-gray-600 justify-center items-center " >
                <br/>
                <div>
                    <text className="mt-3 ml-4 text-3xl font-bold">
                            LAST ONLINE
                    </text><br/>
                    <text className="mt-3 ml-4 text-3xl font-bold">
                            APPOINTMENT
                    </text>
                </div>
                <div className="">
                    <button className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        more
                    </button>
                </div>
            </div>
    )
}

export default AppointmentSection;