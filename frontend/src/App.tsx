import React from 'react';
import Navbar from "./Components/Navbar";
import SignUpForm from "./Components/SignUpForm";
import SignInForm from "./Components/signInForm";
import PatientProfile from "./Components/Patient-Profile/Patient-Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/signup" element={<SignUpForm/>}/>
                <Route path="/signin" element={<SignInForm/>}/>
                <Route path="/patientprofile" element={<PatientProfile/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;