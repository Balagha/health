import React from 'react';
import Navbar from "./Components/Navbar";
import SignUpForm from "./Components/signUpForm/SignUpForm";
import SignInForm from "./Components/signInForm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="font-roboto">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/signup" element={<SignUpForm/>}/>
                <Route path="/signin" element={<SignInForm/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
