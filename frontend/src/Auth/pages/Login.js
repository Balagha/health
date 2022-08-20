import Header from "../components/Header"
import Login from "../components/Login"

export default function LoginPage(){
    return(
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
             <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
            </div>
        </div>
    )
}