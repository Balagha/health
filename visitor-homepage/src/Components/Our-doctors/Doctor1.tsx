import React from "react";
function Doctor1(){
    return (
      <div className="px-4">
        <div className="rounded-md bg-[#f9f9f9]" data-wow-delay="1.0s">
          <img src="/images/team-image1.jpg.jpg" alt="" />
          <h1 className="pt-5 text-3xl text-left px-6 font-bold">
            Miasha Nakahara
          </h1>
          <p className="text-[#757575] px-6 pb-6 text-left">
            General Principal
          </p>
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
    );
}
export default Doctor1;