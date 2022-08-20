import {BrowserRouter, Route, Routes} from "react-router-dom";
import Visitor from "./Visitor";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Visitor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
