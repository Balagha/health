interface DoctorProps {
    name: string;
    image: string;
    designation: string;
    phone: string;
    mail: string;
  }
  function Doctor(props: DoctorProps){
    return(
        <div className="px-4 Doctor">
                    <div className="userinfo rounded-md bg-[#f9f9f9]" data-wow-delay="1.0s">
                        <img src={props.image} alt="" />
                        <h1 className="pt-5 text-3xl text-left px-6 font-bold ">{props.name}</h1>
                        <p className="text-[#757575] px-6 pb-6">{props.designation}</p>
                        <hr />
                        <p className="text-[#757575] text-left pt-6">
                            <img className="ml-6 w-5 inline-block mr-3" src="/images/phone1.png" alt="" />
                            <span>{props.phone}</span>
                        </p>
                        <p className="text-[#757575] text-left pb-6">
                            <img className="ml-6 w-5 inline-block mr-3" src="/images/email.png" alt="" />
                            <span>{props.mail}</span>
                        </p>
                    </div>
                </div>
    )
}
export default Doctor;

