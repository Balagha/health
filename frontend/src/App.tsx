import {BrowserRouter, Routes, Route} from "react-router-dom";
import Visitor from "./Visitor/Visitor";
import DashBoardMainSection from "./dashBoard/Components/dashBoardMain";
import SignupPage from "./login/pages/Signup";
import LoginPage from "./login/pages/Login";

function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Visitor/>}/>
                <Route path="/dashboard" element={<DashBoardMainSection/>}/>
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
