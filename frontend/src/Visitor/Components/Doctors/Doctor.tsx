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
                        <h1 className="pt-5 text-3xl text-left px-6 font-bold">{props.name}</h1>
                        <p className="text-[#757575] px-6 pb-6 text-left">{props.designation}</p>
                        <hr />
                        <p className="text-[#757575] text-left pt-6">
                            <i className="pl-6 pr-3 fa fa-phone"></i>
                            <span>{props.phone}</span>
                        </p>
                        <p className="text-[#757575] text-left pb-6">
                            <i className="pl-6 pr-3 fa fa-envelope-o"></i>
                            <span>{props.mail}</span>
                        </p>
                    </div>
                </div>
    )
}
export default Doctor;

