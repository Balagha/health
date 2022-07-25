import React from "react";
import doctorImg from '../images/doctor.png'
import vr from '../images/VR.png'
import fb from '../images/fb.png'
import google from '../images/g.png'
import li from '../images/li.png'
import ellipse2 from "../images/Ellipse 2.png"
import cardio from "../images/cardiolist.png"
import online from "../images/online.png"

function DoctorSection(){
    return(
        <div className="bg-backgoround h-screen w-screen">

         {/*Doctor section start*/}
            <div className="md:flex flex-row divide-y-0 justify-between p-5 mx-5 box-border mb-32">
                <div className="items-center w-50 w-full">
                    <div className="pl-5 pt-5">
                        <h1 className="text-3xl">Medical</h1>
                        <h1 className="text-3xl">care anytime...</h1>
                    </div>
                    <div>
                        <h1 className="p-5">Health and medical establishments provide arguably the most essential services offered in any given community. From quality-of-life enhancements to life-saving interventions, the services provided by healthcare organizations are without parallel, making these entities key </h1>
                    </div>
                    <div className="flex flex-row pl-4">
                        <div className="p-2">
                            <button className="bg-blue-500 p-2 rounded-xl h-8/12">Get Started</button>
                        </div>
                        <div className="p-1 pt-5">
                            <p>Have an account?</p>
                        </div>
                        <div className="p-1 pt-5">
                            <a className="text-blue-500" href="#">sign in</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse w-full mb-5">
                    <div>

                        <div className="container bg-red-500 w-50 h-50 absolute" ></div>
                        <span className="flex flex-row-reverse">
                          <img className="p-5  w-2/3 " src={doctorImg}/>
                        </span>

                    </div>
                    <div className="flex flex-row relative mb-3">
                        <div className="absolute ml-40 mt-64 box-content h-[100px] w-[200px] p-4 bg-[#FFFFFF] opacity-80 shadow-2xl rounded-2xl
                        backdrop-filter backdrop-blur">
                            <div className="flex flex-col">
                                <h1 className="font-bold">Dr AKM KHAN</h1>
                                <h1 className="font-thin">Online</h1>
                            </div>
                            <div className="flex flex-col divide-y-2">
                                <div></div>
                                <div className="flex flex-row">
                                    <div className="flex flex-row">
                                        <img className="h-6 mt-4" src={ellipse2}/>
                                        <img className="absolute h-3 mt-6 ml-1" src={cardio}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="mt-3 ml-5 font-thin text-gray-400">Doctor</h1>
                                        <h2 className="ml-5 text-gray-400">Cardiolist</h2>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="absolute ml-80 mt-56">
                            <div className="rounded-full bg-red-500 ">
                                <h1 className="p-3">Top Rated</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute mt-96 mr-[70vh]">
                        <a href="#">
                            <h1 className="text-[#258AFF]">Sign up as doctor?</h1>
                        </a>
                    </div>

                </div>
            </div>
            <div className="flex flex-row justify-center">
                <div className="h-2 w-36 bg-[#D9D9D9] rounded-full mb-10">

                </div>
            </div>
            {/*Doctor section Ends*/}

            {/*Welcome to health section starts*/}
            <div className="flex h-screen w-screen justify-center box-border overflow-hidden">
                <div className="w-[704px] h-[704px] absolute -left-96 top-3/4 border bg-gradient-to-r from-pink-500 to-pink-300
                rounded-full overflow-hidden"></div>
                <div className="w-[704px] h-[704px] absolute -right-96 top-[145%] border bg-gradient-to-r from-blue-500 to-blue-300
                rounded-full absolute"></div>
                <div className="flex divide-x p-6 max-mr-32 md:max-w-4xl bg-[##FFFFFF] justify-center items-center shadow-2xl
                backdrop-filter backdrop-blur-md bg-opacity-30">
                    <div className="">
                        <h1 className="text-4xl m-2">Welcome to Health</h1>
                        <h2 className="m-3">where you can find profetional helath care anytime anywhere so let’s do it together</h2>
                        <input placeholder="email" className="w-11/12 m-2 drop-shadow-xl rounded-full p-1 pl-3"/>
                        <input placeholder="password" className="w-11/12 m-2 drop-shadow-xl rounded-full bg-gradient-to-b p-1 pl-3"/>
                        <div className="flex justify-center">
                            <a className="text-gray-400 mx-13" href="#">Forgot Password?</a>
                        </div>
                        <div className="flex justify-center">
                            <div className="border border-blue-500 rounded-full my-4 w-4/8">
                                <button className="rounded-full px-7 bg-blue-500 text-white">Log In</button>
                                <button className="px-7 border-blue-500">Sign In</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center" >
                            <div className=""></div>
                            <h1 className="text-gray-400 my-5">or</h1>
                        </div>
                        <div className="flex flex row justify-center">
                            <div>
                                <a href="#">
                                    <img src={fb} className="scale-50" />
                                </a>

                            </div>
                            <div>
                                <a href="#">
                                    <img src={google} className="scale-50" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src={li} className="scale-50" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto flex-shrink flex items-center justify-center">
                        <img src={vr}/>
                    </div>
                </div>
            </div>
            {/*Welcome to health section ends*/}
        </div>
    )

}
export default DoctorSection;