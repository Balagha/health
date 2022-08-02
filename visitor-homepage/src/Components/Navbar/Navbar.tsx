import React from 'react';
import DesktopNav from './Desktop-nav';
import MobileNav from './Mobile-nav';
//import healthIcon from '../images/logo.svg';
function Navbar(){
    return(
            <div >
            <DesktopNav/>
            <MobileNav/>
            </div>
    );
};

export default Navbar;