import {Route, Routes} from "react-router-dom";
import DoctorsCardMain from "./Components/DoctorsCardMain";
import DoctorProfile from "./Components/Doctor-Profile/Doctor-Profile";
import Home from "./Components/Home";

function Visitor() {
  return (
    <Routes>
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctors" element={<DoctorsCardMain />} />
        <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Visitor;
