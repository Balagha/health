import React from 'react';
import patient from './image/patient.jpeg'
import Vector from './image/Vector.png'

function PatientImage (){
    return(
                    <div>
                            <div className="mt-12 w-50-r h-80-r container relative bg-white
                            backdrop-filter bg-opacity-50 backdrop-blur-md shadow-2xl rounded-3xl 
                            text-blue-500 justify-center items-center " 
                            style={{boxShadow:'100px',backdropFilter:'blur(0px)',
                            borderRadius:'20px',marginLeft:'5px', height:'180px', width:'180px',}}>     
                                <img src={patient} alt='img' style={{zIndex:'1',borderRadius:'30px', position:'fixed'}}/>
                                <div className="mt-12 w-50-r h-80-r container relative bg-white backdrop-filter bg-opacity-50 backdrop-blur-md shadow-2xl rounded-3xl 
                            text-blue-500 justify-center items-center " 
                            style={{backdropFilter:'blur(100px)',
                            borderRadius:'50px',top:'140px', height:'55px', width:'180px',zIndex:'2'}}> 
                            <img src={Vector} alt="camera" style={{marginLeft:'40%', paddingTop:'7%',height:'40px',width:'40px', opacity:'50%'}}/>
                            </div>
                            </div>
                    </div>
    )
}

export default PatientImage;