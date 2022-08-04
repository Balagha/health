import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Doctors from "./Components/Doctors";
import Topbar from "./Components/Topbar";

function Visitor() {
  return (
    <div className="font-roboto"> 
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <About/>
      <Doctors/>
    </div>
  );
}

export default Visitor;
