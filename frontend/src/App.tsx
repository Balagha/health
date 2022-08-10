import {BrowserRouter, Routes, Route} from "react-router-dom";
import Visitor from "./Visitor/Visitor";
import DashBoardMainSection from "./dashBoard/Components/dashBoardMain";

function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Visitor/>}/>
                <Route path="/dashboard" element={<DashBoardMainSection/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
