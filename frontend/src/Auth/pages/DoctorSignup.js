import Header from "../components/Header";
import DoctorSignupForm from "../components/DoctorSignupForm";
const DoctorSignup = ()=>{
    return(
        <div className="h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <Header
                    heading="Signup to create an account"
                    paragraph="Already have an account? "
                    linkName="Login"
                    linkUrl="/auth/login"
                />
                <div className='flex items-center justify-center'>
                    <a href="/auth/signup/patient" className="text-[#A5C422] font-sans">SignUp as Patient?</a>
                </div>
                <DoctorSignupForm/>
            </div>
        </div>
    )
}
export default DoctorSignup;