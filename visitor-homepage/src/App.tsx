import React from 'react';
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import {BrowserRouter} from "react-router-dom";
import Slider from './Components/Slider';
import About from './Components/About';
import Doctors from './Components/Doctors';
// Routes, Route
function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Topbar/>
            <hr/>
            <Navbar/>
            <Slider/>
            <About/>
            <Doctors/>
        </BrowserRouter>
    </div>
  );
}

export default App;
