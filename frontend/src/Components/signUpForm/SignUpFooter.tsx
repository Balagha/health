import React from 'react'

function SignUpFooter(){
    return(
        <div className="h-90-r w-100-r absolute bg-gradient-to-tl from-blue-700 to-blue-400
                   rounded-full top-3/4 flex justify-center">
            <div className="flex h-screen w-1/4 absolute justify-center top-20">
                <h1 className="flex absolute text-3xl text-white">About Us</h1>
            </div>
            <div className="flex h-screen w-6/12 absolute justify-between overflow-hidden top-52">
                <h1 className="flex absolute text-sm text-white">WHO WE ARE
                    The National Healthc  Network An Enterprise of Diabetic Association of Bangladesh, the primary objective of providing quality diagnostic services throughout the country at a reasonable cost.
                    Subsequently, health-care component was incorporated to make it cost-effective and more comprehensive. At present NHN is one of the largest Healthcare network of the Diabetic Association of Bangladesh.
                    Currently, NHN with its 07 hospitals, 23 Medical Centers provides quality Medicare services to the doorsteps of people. A nursing institute called NHN Nursing Institute provides quality nurses to serve quality medical services.</h1>
            </div>
        </div>
    )
}
export default SignUpFooter;