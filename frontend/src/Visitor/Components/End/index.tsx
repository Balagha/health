import Contact from "./Contact";
import Latest from "./Latest";
import Opening from "./Opening";

function End(){
    return(
        <div className="max-w-7xl mx-auto">
            <div className="mt-[6rem] mr-[3rem] ml-[3rem] mr-[2rem] grid grid-cols-3 gap-4 flex">
                <Contact/>
                <Latest/>
                <Opening/>
            </div>
            <p><hr/></p>
        </div>
    )
}
export default End;