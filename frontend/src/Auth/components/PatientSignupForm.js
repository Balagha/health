import {useState} from 'react';
import {patientSignupFields} from "../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";

const fields=patientSignupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export default function PatientSignupForm(){
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }

  //handle PatientSignupForm API Integration here
  const createAccount=()=>{
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(signupState)
      };
      fetch('http://localhost:8080/api/patient', requestOptions)
          .then(response => response.json())
          .then(data =>
          {
              let alertmsg
              data.errors.forEach(error=>alertmsg+=error.msg)
              alert(alertmsg)
          });
  }

  return(
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {
            fields.map(field=>
                <div key={field.id}>
                  <h1 className="font-semibold">{field.labelText}</h1>
                  <Input

                      handleChange={handleChange}
                      value={signupState[field.id]}
                      labelText={field.labelText}
                      labelFor={field.labelFor}
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      isRequired={field.isRequired}
                      placeholder={field.placeholder}
                  />
                </div>

            )
          }
          <FormAction handleSubmit={handleSubmit} text="Doctor Signup" />
        </div>
      </form>
  )
}