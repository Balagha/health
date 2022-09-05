const  generateField = (field,type,isRequired,placeHolder)=>{
    const formatedLabelText =  field.split("_").map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    return {
        labelText:formatedLabelText,
        labelFor:field,
        id:field,
        name:field,
        type:type,
        autoComplete:field,
        isRequired:isRequired,
        placeHolder:placeHolder,
    }
}
const loginFields=[
    generateField('email','email',true,"Enter your mail"),
    generateField('password','password',true,"Enter your passowrd")
]

const patientSignupFields=[
    generateField('user_name','text',true,"User name"),
    generateField('date_of_birth','date',true,"Enter your birth date"),
    generateField('phone_number','number',true,'Enter your number'),
    generateField('email','email',true,"Enter your mail"),
    generateField('password','password',true,"Enter your passowrd"),
    generateField('Confirm Password','password',true," Confirm your passowrd")
]

const doctorSignupFields=[
    generateField('first_name','text',true,"Enter your name"),
    generateField('last_name','text',true,"Enter last name"),
    generateField('gender','text',true,'Enter your Gender'),
    generateField('date_of_birth','date',true,"Enter your Bith Date"),
    generateField('email','email',true,"Enter your email"),
    generateField('contact_number','number',true," Enter your contact"),
    generateField('emergency_contact_number','number',true,"emenergency contact"),
    generateField('address','text',true," Address"),
    generateField('official_id_type','text',true," Select Id type"),
    generateField('official_id_number','text',true,"Official Id Number"),
    generateField('govt_reg_no','text',true," Enter govt reg no"),
    generateField('specialization','text',true," specialization"),
    generateField('available_from','date',true," available_from"),
    generateField('available_to','date',true," Available_to"),
    generateField('weekend','text',true," Select weekend"),
]

export {loginFields,patientSignupFields,doctorSignupFields}