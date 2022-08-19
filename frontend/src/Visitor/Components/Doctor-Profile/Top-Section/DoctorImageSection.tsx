import React from 'react';

function DoctorImage (){
    return(
        <div className="relative w-[10rem] h-[40]" >
            <img className="rounded-3xl object-fill h-[12rem] relative" src="/images/doctor.jpeg" alt="person"/>
            <div className="bg-[#D9D9D9] opacity-70 rounded-3xl absolute inset-x-0 bottom-0 h-10">
            </div>
            <img className="ml-16 opacity-80 absolute inset-x-0 bottom-2 h-6" src="/images/camera.png" alt="camera"/>
        </div>
    )
}

export default DoctorImage;