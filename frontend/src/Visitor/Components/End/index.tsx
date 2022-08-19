import Contact from "./Contact";
import Latest from "./Latest";
import Opening from "./Opening";

function End(){
    return(
        <div className="max-w-7xl mx-auto sm:ml-[14%] lg:flex justify-left">
            <div className="mt-20 sm:px-0 px-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 flex">
                <Contact/>
                <Latest/>
                <Opening/>
            </div>
            <div className="pb-5"></div>
        </div>
    )
}
export default End;