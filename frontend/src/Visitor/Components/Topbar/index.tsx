import DesktopSection from './Desktop-section';
import MobileSection from './Mobile-section';
 
function Topbar(){
    return(
            <nav>
            <DesktopSection/>
            <MobileSection/>
            <hr />
            </nav>
    );
};

export default Topbar;
