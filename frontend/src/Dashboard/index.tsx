import {Route, Routes} from "react-router-dom";
import DashBoardMainSection from "./Components/dashBoardMain";

function Dashboard() {
  return (
    <Routes>
        <Route path="/" element={<DashBoardMainSection />} />
    </Routes>
  );
}

export default Dashboard;
