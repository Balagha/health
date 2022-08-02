import React from 'react';
function About (){
    return(
        <div  className="h-[30rem] overflow-y-hidden justify-center items-center">
            <div className="mt-[1rem] w-[130rem] h-[70rem] rounded-tl-full rounded-tr-full bg-[#258AFF] flex justify-center">
                <text className="mt-[7rem] flex absolute text-4xl text-white font-medium">About Us</text>
                <text className="mt-[12rem] flex absolute text-sm text-white text-center font-bmedium">
                WHO WE ARE?<br/>
                The National Health care Network An Enterprise of Diabetic Association of Bangladesh, the primary <br/>objective of providing quality diagnostic services throughout the country at a reasonable cost.<br/>
                Subsequently, health-care component was incorporated to make it cost-effective and more comprehensive. <br/>At present NHN is one of the largest Healthcare network of the Diabetic Association of Bangladesh.<br/>
                Currently, NHN with its 07 hospitals, 23 Medical Centers provides quality Medicare services to the doorsteps of <br/>people. A nursing institute called NHN Nursing Institute provides quality nurses to serve quality medical services.
                </text>
            </div> 
        </div>
    )
}

export default About;