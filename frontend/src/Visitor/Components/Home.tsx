import Carousel from "./Carousel";
import About from "./About";
import Navbar from "./Navbar";
import Doctors from "./Doctors";
import Topbar from "./Topbar";
import LatestNews from "./LatestNews";
import Showmap from "./Showmap";
import Footer from "./footer";

function Home() {
  return (
    <div className="font-roboto">
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Doctors />
      <LatestNews />
      <Showmap />
      <Footer />
    </div>
  );
}

export default Home;
