import React from 'react';
function AppointmentSection (){
    return(
                    <div>
                        <div className="mt-12 w-50-r h-80-r container relative bg-white
                                backdrop-filter bg-opacity-50 backdrop-blur-md shadow-2xl rounded-3xl 
                                text-blue-500 justify-center items-center " 
                                style={{boxShadow:'100px',backdropFilter:'blur(0px)',
                                borderRadius:'10px',marginLeft:'70px', height:'180px', width:'300px',}}>
                                    <br/>
                                    <div style={{marginLeft:'20px'}}>
                                        <text style={{fontSize: '180%', color: '#505050', fontWeight: 'bold'}}>
                                            LAST ONLINE<br/>APPOINTMENT
                                        </text>
                                    </div>
                                    <br/>
                                    <div style={{marginLeft:'230px'}}>
                                    <p>
                                        <button className="bg-blue-500 px-8 text-white rounded" style={{paddingLeft:'13px',height:'35px',width:'60px',fontWeight:'bold'}}>
                                            more
                                        </button>
                                    </p>
                                    </div>
                                </div>
                    </div>
    )
}

export default AppointmentSection;