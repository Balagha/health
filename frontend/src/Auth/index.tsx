import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login";
import PatientSignupPage from "./pages/PatientSignup";
import DoctorSignup from "./pages/DoctorSignup";

function Auth() {
  return (
    <Routes>
        <Route path="/signup/patient" element={<PatientSignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/doctor" element={<DoctorSignup />} />
    </Routes>
  );
}

export default Auth;
