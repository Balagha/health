import Form from "./Form";
function Appointment(){
    return(
        <div className="max-w-7xl mx-auto mt-[4rem] text-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0">
            <img className="" src="/images/appointment-image.jpg" alt="" />
            <Form/>    
        </div>
    )
}
export default Appointment;