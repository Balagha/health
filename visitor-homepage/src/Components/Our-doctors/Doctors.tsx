import React from "react";
import Doctor1 from "./Doctor1";
import Doctor2 from "./Doctor2";
import Doctor3 from "./Doctor3";

function Doctors(){
    return(
        <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-2">
            <h1 className="text-5xl font-bold pt-7 text-[#272727]">Our Doctors</h1>
            <br />
            <div className="text-center grid grid-cols-3">
                <Doctor3/>
                <Doctor2/>
                <Doctor1/>
            </div>
        <br /><br />
        </div>
    )
}
export default Doctors;