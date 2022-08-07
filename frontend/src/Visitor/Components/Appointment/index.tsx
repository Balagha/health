import Form from "./Form";
function Appointment(){
    return(
        <div className="mt-[4rem] text-center grid grid-cols-2 gap-0">
            <img className="mt-[2rem] ml-[3rem] h-[40rem] w-[36rem]" src="/images/appointment-image.jpg" alt="" />
            <Form/>    
        </div>
    )
}
export default Appointment;