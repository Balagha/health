import {BrowserRouter, Routes, Route} from "react-router-dom";
import Visitor from "./Visitor/Visitor";

function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Visitor/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
