import {BrowserRouter, Route, Routes} from "react-router-dom";
import Visitor from "./Visitor";
import Auth from "./Auth";
import Dashboard from "./Dashboard";
import Form from "./Dashboard/Components/form";

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<Auth/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Visitor />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
