import {BrowserRouter, Routes, Route} from "react-router-dom";
import Visitor from "./Visitor/Visitor";
import DashBoardMainSection from "./dashBoard/Components/dashBoardMain";
import Login from './login/src/components/Login';
import Signup from './login/src/components/Signup';
import SignupPage from './login/src/pages/Signup';

function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Visitor/>}/>
                <Route path="/dashboard" element={<DashBoardMainSection/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
