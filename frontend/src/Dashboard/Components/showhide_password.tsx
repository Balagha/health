import { SetStateAction, useState } from "react";

function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt: { target: { value: SetStateAction<string>; }; })=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div>
                <input className="relative form-control" type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" id="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}" title="Minimum 8 Characters Including An Upper And Lower Case Letter, A Number And A Unique Character" required />
                    <div className="input-group-btn absolute bottom-2 left-[92%] ">
                     <i  onClick={togglePassword}>
                     { passwordType==="password"? <i className="far fa-eye-slash"></i> :<i className="far fa-eye"></i> }
                     </i>
                     </div>
      </div>
      
    )

}
export default ShowAndHidePassword;