import {BrowserRouter, Route, Routes} from "react-router-dom";
import Visitor from "./Visitor";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Table from "./Dashboard/Components/table";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard/Components/table" element={<Table />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Visitor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
