import React from 'react';
import healthIcon from './images/logo.svg';
import {Link} from "react-router-dom"
function Navbar(){
    return(
       <div className="text-black flex justify-between box-border bg-backgoround p-5 max-w-full mx-4 ">
           <div className="md:flex items-center ml-1 w-50 mt-1">
               <img alt="" src={healthIcon} className=""/>
               <h1 className="text-2xl">Health</h1>
           </div>

           <div >
               <ul className="md:flex mt-1">
                   <li className="p-4">
                    <a className="text-[#258AFF] text-xl" href="/#">Home</a>
                   </li>
                   <li className="p-4">
                       <a className="text-[#258AFF] text-xl" href="/#">Pages</a>
                   </li>
                   <li className="p-4">
                       <a className="text-[#258AFF] text-xl" href="/#">Support</a>
                   </li>
                   <li className="p-4">
                       <a className="text-[#258AFF] text-xl" href="/#">Conferences</a>
                   </li>
                   <li className="p-4">
                       <a className="text-[#258AFF] text-xl" href="/#">About Us</a>
                   </li>
               </ul>
           </div>
           <div className="md:flex h-10 items-center mr-5 border border-blue-500 rounded-full mt-2">
               <Link to="/signin" className="box-border p-2 w-50 h-10">Sign In</Link>
               <Link to="/signup" className="box-border rounded-full w-50 h-10 bg-blue-500 p-2 text-white">Sign Up</Link>
           </div>

       </div>
    );
};

export default Navbar;