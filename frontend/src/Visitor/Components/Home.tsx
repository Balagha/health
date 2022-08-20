import Carousel from "./Carousel";
import About from "./About";
import Navbar from "./Navbar";
import Doctors from "./Doctors";
import Topbar from "./Topbar";
import Infos from "./LatestNews";
import Appointment from "./Appointment";
import Showmap from "./Showmap";
import End from "./End";
import Footer from "./Footer";

function Home() {
  return (
    <div className="font-roboto">
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Doctors />
      <Infos />
      <Appointment />
      <Showmap />
      <End />
      <Footer />
    </div>
  );
}

export default Home;
