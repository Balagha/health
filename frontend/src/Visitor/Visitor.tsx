import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Doctors from "./Components/Doctors";
import Topbar from "./Components/Topbar";
import Infos from "./Components/LatestNews";
import Appointment from "./Components/Appointment";
import Map from "./Components/Showmap";
import End from "./Components/End";
import Footer from "./Components/Footer/Footer";
import SearchDoctor from "./Components/SearchDoctor/searchDoctor";

function Visitor() {
  return (
    <div className="font-roboto"> 
      <Topbar/>
      <Navbar/>
      <Carousel/>
      <SearchDoctor/>
      <About/>
      <Doctors/>
      <Infos/>
      <Appointment/>
      <Map/>
      <End/>
      <Footer/>
    </div>
  );
}

export default Visitor;
