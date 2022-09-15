import Header from "../components/Header";
import Signup from "../components/Signup";

export default function SignupPage(){
    return(
        <div className="h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/auth/login"
            />
             <div className='flex items-center justify-center'>
                 <a href="#" className="text-[#A5C422] font-sans">SignUp as Doctor?</a>
             </div>
            <Signup/>

            </div>
        </div>
    )
}