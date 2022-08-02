import React from "react";
import CarouselWrapper from "./Carousel-wrapper";
import SliderControls from "./Slider-controls";
import SliderIndicators from "./Slider-indicators";
function Carousel(){
    return(
      

<div id="default-carousel" className="relative" data-carousel="static">

        <CarouselWrapper/>
        <SliderIndicators/>
        <SliderControls/>
</div>

  
    );
};
export default Carousel;