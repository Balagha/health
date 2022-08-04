import React from "react";
function About(){
    return (
      <div className="bg-[url('/images/about-bg.jpg')] bg-no-repeat bg-center bg-top py-20">
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2">
          <div className="pt-6">
            <h2 className="pb-4 text-5xl font-bold text-[#272727]">
              Welcome to Your <i className="fa fa-h-square"></i>ealth <br />{" "}
              Center
            </h2>

            <p className="py-2 text-[#757575]">
              Aenean luctus lobortis tellus, vel ornare enim molestie
              condimentum. Curabitur <br />
              lacinia nisi vitae velit volutpat venenatis.
            </p>

            <p className="py-2 text-[#757575]">
              Sed a dignissim lacus. Quisque fermentum est non orci commodo, a
              luctus <br />
              urna mattis. Ut placerat, diam a tempus vehicula.
            </p>

            <div className="pt-5 grid grid-cols-6">
              <div className=" ">
                <img
                  src="/images/author-image.jpg"
                  className="rounded-full h-20"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl left-0 text-[#333333] font-bold">
                  Dr. Neil Jackson
                </h3>
                <p>General Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;