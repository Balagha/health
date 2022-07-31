import React from "react";
import TeamImage1 from '../images/team-image1.jpg';
import TeamImage2 from '../images/team-image2.jpg';
import TeamImage3 from '../images/team-image3.jpg';

function Doctors(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2">
            <h1 className="text-5xl font-bold pt-7 text-[#272727]">Our Doctors</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <div className="px-4">
                    <div className="rounded-md bg-[#f9f9f9]">
                        <img src={TeamImage1} alt="" />
                        <h1 className="pt-5 text-3xl text-left px-6 font-bold">Miasha Nakahara</h1>
                        <p className="text-[#757575] px-6 pb-6 text-left">General Principal</p>
                        <hr />
                        <p className="text-[#757575] text-left pt-6">
                            <i className="pl-6 pr-3 fa fa-phone"></i>
                            <span>010-060-0160</span>
                        </p>
                        <p className="text-[#757575] text-left pb-6">
                            <i className="pl-6 pr-3 fa fa-envelope-o"></i>
                            <span>mail@yourdomain.com</span>
                        </p>
                    </div>
                </div>
                <div className="px-4">
                    <div className="rounded-md bg-[#f9f9f9]">
                        <img src={TeamImage2} alt="" />
                        <h1 className="pt-5 text-3xl text-left px-6 font-bold">Miasha Nakahara</h1>
                        <p className="text-[#757575] px-6 pb-6 text-left">General Principal</p>
                        <hr />
                        <p className="text-[#757575] text-left pt-6">
                            <i className="pl-6 pr-3 fa fa-phone"></i>
                            <span>010-060-0160</span>
                        </p>
                        <p className="text-[#757575] text-left pb-6">
                            <i className="pl-6 pr-3 fa fa-envelope-o"></i>
                            <span>mail@yourdomain.com</span>
                        </p>
                    </div>
                </div>
                <div className="px-4">
                    <div className="rounded-md bg-[#f9f9f9]">
                        <img src={TeamImage3} alt="" />
                        <h1 className="pt-5 text-3xl text-left px-6 font-bold">Miasha Nakahara</h1>
                        <p className="text-[#757575] px-6 pb-6 text-left">General Principal</p>
                        <hr />
                        <p className="text-[#757575] text-left pt-6">
                            <i className="pl-6 pr-3 fa fa-phone"></i>
                            <span>010-060-0160</span>
                        </p>
                        <p className="text-[#757575] text-left pb-6">
                            <i className="pl-6 pr-3 fa fa-envelope-o"></i>
                            <span>mail@yourdomain.com</span>
                        </p>
                    </div>
                </div>
            </div>
        <br /><br />
        </div>
    )
}
export default Doctors;