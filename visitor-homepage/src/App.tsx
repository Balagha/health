import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Topbar from "./Components/Topbar/Topbar";
import {BrowserRouter} from "react-router-dom";
import Carousel from './Components/Carousel/Carousel';
import About from './Components/About';
import Doctors from './Components/Our-doctors/Doctors';
// Routes, Route
function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Topbar/>
            <Navbar/>
            <Carousel/>
            <About/>
            <Doctors/>
        </BrowserRouter>
    </div>
  );
}

export default App;
