import {BrowserRouter, Routes, Route} from "react-router-dom";
import Visitor from "./Visitor/Visitor";
import DashBoardMainSection from "./dashBoard/Components/dashBoardMain";
import SignupPage from "./login/pages/Signup";
import LoginPage from "./login/pages/Login";
import Table from "./dashBoard/Components/table";
import DoctorsCardMain from "./DoctorsCard/Components/doctorsCardMain";
import DoctorProfile from "./Visitor/Components/Doctor-Profile/Doctor-Profile";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Visitor />} />
          <Route path="/doctor-profile" element={<DoctorProfile/>} />
          <Route path="/dashboard" element={<DashBoardMainSection />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/components" element={<Table />} />
          <Route path="/doctors" element={<DoctorsCardMain/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
