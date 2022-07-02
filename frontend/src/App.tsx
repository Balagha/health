import React from 'react';
import logo from './logo.svg';

import Navbar from "./Components/Navbar";
import DoctorSection from "./Components/DoctorSection";
import SignUpForm from "./Components/SignUpForm";

function App() {
  return (
    <div className="font-roboto">
        <Navbar/>
        <SignUpForm/>
    </div>
  );
}

export default App;
