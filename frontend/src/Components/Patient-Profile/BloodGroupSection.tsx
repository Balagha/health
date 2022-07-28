import React from 'react';
function BloodGroupSection (){
    return(
                    <div style={{margin:'5px'}}>

                        {/* 1st section start*/}
                        <div style={{margin: '50px'}}>
                            <text style={{color: "red", fontWeight: 'bold', fontSize: '300%'}}>
                                o
                            <sup style={{fontSize: '60%'}}>+</sup>
                            </text>
                            <br/>
                            <text style={{color: "black",fontWeight: 'bold', fontSize: '200%'}}>
                                Bill Gates
                            <br/>
                            </text>
                            <text style={{color: "black", fontSize: '80%'}}>
                                Your profile info in our services.<br/>
                                Personal info and options to manage it.
                                You can make some of this info,<br/>
                                like your contact details, visible to others 
                                so they can reach you easily.<br/>
                                Address: Medina, Washington, United States
                            </text>
                            <br/>
                        </div>
                        {/* 1st section end*/}

                    </div>
    )
}

export default BloodGroupSection;