import Contact from "./Contact";
import Latest from "./Latest";
import Opening from "./Opening";
import Footer from "./Footer";

function End(){
    return(
        <div>
            <div className="mt-[6rem] mr-[3rem] ml-[3rem] mr-[2rem] grid grid-cols-3 gap-4">
                <Contact/>
                <Latest/>
                <Opening/>
                <Footer/>
            </div>
            <p><hr/></p>
        </div>
    )
}
export default End;