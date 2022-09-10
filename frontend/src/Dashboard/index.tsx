import {Route, Routes} from "react-router-dom";
import DashBoardMainSection from "./Components/dashBoardMain";
import Table from "./Components/table";

function Dashboard() {
  return (
    <Routes>
        <Route path="/components" element={<Table />} />
        <Route path="/" element={<DashBoardMainSection />} />
    </Routes>
  );
}

export default Dashboard;
