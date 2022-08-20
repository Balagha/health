import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

function Auth() {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Auth;
