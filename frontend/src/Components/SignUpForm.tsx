import React from 'react';
import signup from './images/signupimg.png'
import {Link} from "react-router-dom"

function SignUpForm (){
    return(
            <div className="bg-[#F5F5F5] h-full w-full flex flex-col absolute overflow-x-hidden justify-center items-center">
                <div className="h-40-r w-40-r bg-gradient-to-r from-pink-500 to-pink-300
                 rounded-full -left-72 top-1/4 absolute"></div>
                <div className="h-40-r w-40-r bg-gradient-to-tl from-blue-700 to-blue-400 rounded-full -right-1/4 -top-10 absolute
                "></div>
                <div className="mt-8 w-50-r h-80-r container relative bg-white backdrop-filter bg-opacity-50
                backdrop-blur-md shadow-2xl rounded-3xl text-blue-500 justify-center items-center ">
                    <form className="h-full flex flex-row relative divide-x-2">
                        <div className="flex flex-col m-8 w-1/2">
                            <div className="text-2xl mb-3">Sign Up</div>
                            <input type="text" placeholder="Name" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="email" placeholder="email" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="password" placeholder="password" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="text" placeholder="blood group" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="text" placeholder="contact number" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="text" placeholder="address" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="text" placeholder="profession" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                            <input type="text" placeholder="passort/nid/birth certificate number" className="pl-2 p-1 m-2 rounded-full shadow-2xl focus:outline-none"/>
                        </div>
                        <div className="w-1/2 m-8 flex flex-col relative">
                            <img alt="" src={signup} className="p-4"/>
                            <div className="flex ml-20">

                                <h1 className="p-2">
                                    <a href="/#">Sign in as doctor</a>
                                     </h1>
                                {/* <button className="bg-blue-500 px-8 text-white rounded">Sign In</button> */}
                                <Link to="/patientprofile" className="box-border w-50 h-10 bg-blue-500 p-2 text-white" style={{width:'100px',borderRadius:'5px', paddingLeft:'25px'}}>Submit</Link>
                            </div>
                        </div>

                    </form>
                </div>


            </div>

    )
}


export default SignUpForm;