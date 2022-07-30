import React from 'react';
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import {BrowserRouter} from "react-router-dom";
import Slider from './Components/Slider';
// Routes, Route
function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Topbar/>
            <hr/>
            <Navbar/>
            <Slider/>
        </BrowserRouter>
    </div>
  );
}

export default App;
