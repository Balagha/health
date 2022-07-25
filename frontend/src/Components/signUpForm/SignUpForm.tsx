import React from 'react';
import signup from '../../images/signupimg.png'
import SignUpFooter from "./SignUpFooter";

function SignUpForm (){
    return(
     <div className="flex flex-col mt-24">
        <div className="flex w-full h-screen justify-center items-center absolute">
            <div className="flex w-full h-[1900px] items-center absolute justify-center w-full overflow-hidden">
                <div className="h-40-r w-40-r absolute bg-gradient-to-r from-pink-500 to-pink-300
                   rounded-full -left-72 top-45%"></div>
                <div className="h-35-r w-35-r absolute bg-gradient-to-tl from-blue-700 to-blue-400
                   rounded-full -right-[15%] top-[30%]"></div>

                    <div className="mt-20 w-50-r h-40-r container flex bg-white backdrop-filter bg-opacity-50
                          backdrop-blur-md shadow-2xl rounded-3xl text-blue-500 justify-center items-center">
                        <form className="h-full flex flex-row relative divide-x-2">
                            <div className="flex flex-col m-8 w-1/2">
                                <div className="text-2xl mb-3">Sign Up</div>
                                <input type="text" placeholder="Name" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full focus:outline-none"/>
                                <input type="email" placeholder="email" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                                <input type="password" placeholder="password" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                                <p className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full text-gray-500 text-sm">Date Of Birth</p>
                                <input type="date" placeholder="Date of Birth" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none text-gray-500"/>
                                <input type="text" placeholder="blood group" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full pointer-events-none focus:outline-none"/>
                                <input type="text" placeholder="contact number" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                                <input type="text" placeholder="address" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                                <input type="text" placeholder="profession" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                                <input type="text" placeholder="passort/nid/birth certificate number" className="pl-2 p-1 m-2 border-none drop-shadow-xl rounded-full  focus:outline-none"/>
                            </div>
                            <div className="w-1/2 m-8 flex flex-col relative">
                                <img alt="" src={signup} className="p-4"/>
                                <div className="flex ml-20 mt-10">

                                    <h1 className="p-2">
                                        <a href="/frontend/public#">Sign in as doctor</a>
                                    </h1>
                                    <button className="bg-blue-500 px-8 text-white rounded">Sign In</button>
                                </div>
                            </div>
                        </form>
                    </div>
                <SignUpFooter/>
            </div>
        </div>
     </div>


    );
}


export default SignUpForm;