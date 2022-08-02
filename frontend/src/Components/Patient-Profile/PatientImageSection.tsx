import React from 'react';
import patient from './image/patient.jpeg'
import Vector from './image/Vector.png'

function PatientImage (){
    return(
        <div className="relative w-40 h-[50rpm]" >
            <img className="rounded-3xl object-fill w-40 h-[50rpm] relative" src={patient} alt="person"/>
            <div className="bg-[#D9D9D9] opacity-50 rounded-3xl absolute inset-x-0 bottom-0 h-12">
            </div>
            <img className="ml-14 opacity-80 absolute inset-x-0 bottom-2 h-8" src={Vector} alt="camera"/>
        </div>
    )
}

export default PatientImage;