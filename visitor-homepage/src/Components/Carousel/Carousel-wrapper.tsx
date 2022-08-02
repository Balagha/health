import React from "react";
import Slider1 from "../../images/slider1.jpg";
import Slider2 from "../../images/slider2.jpg";
import Slider3 from "../../images/slider3.jpg";
function CarouselWrapper(){
    return(
        <div className="overflow-hidden relative h-56 rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src={Slider1} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src={Slider2} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img src={Slider3} className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..."/>
        </div>
    </div>
    )
}
export default CarouselWrapper;