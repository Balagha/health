import End from "../End";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import ResponsiveDateTimePickers from "./Calendar";
import InfoSection from "./Info-Section";
import TopSection from "./Top-Section";

function DoctorProfile (){
    return(
        <div>
            <Topbar/>
            <Navbar/>    
            <div className="b1g-[#F5F5F5] h-full-r w-full flex flex-col absolute justify-center items-center">
                {/* <div className="mt-10 h-40-r w-40-r bg-gradient-to-r from-pink-500 to-pink-300
                rounded-full -left-72 top-1/4 absolute"/>
                <div className="h-35-r w-35-r absolute bg-gradient-to-tl from-blue-700 to-blue-400 rounded-full -right-[15%] top-[12%]"/> */}
                    <div className="mt-[3rem] w-50-r h-[full] container relative bg-[#D8D8D8] backdrop-filter bg-opacity-30 backdrop-blur-md shadow-lg rounded-2xl text-black-600 justify-center items-center ">
                        <TopSection/>
                        <InfoSection/>
                    <div className="mt-[5%] w-[79.5%] ml-[9%]">
                    <ResponsiveDateTimePickers/>
                    </div>
                        <br/> <br/> 
                    </div>
                <br/>
            </div>
            <div className="mt-[92%]">
            <End/>
            </div>
            <Footer/> 
        </div>
    )
}

export default DoctorProfile;