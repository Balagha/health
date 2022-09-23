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
    generateField('first_name','text',true,"Enter your name"),
    generateField('last_name','text',true,"Enter last name"),
    generateField('password','password',true,"Enter Password"),
    generateField('gender','text',true,'Enter your Gender'),
    generateField('date_of_birth','date',true,"Enter your Bith Date"),
    generateField('email','email',true,"Enter your email"),
    generateField('blood_group','text',true,"Enter your Blood Gorup"),
    generateField('contact_number','text',true," Enter your contact"),
    generateField('emergency_contact_number','text',true,"Enter your emenergency contact"),
    generateField('address','text',true,"Enter your Address"),
    generateField('official_id_type','text',true," Select Id type"),
    generateField('official_id_number','text',true,"Official Id Number"),
    generateField('profession','text',false,'Enter your Proffesion'),
    generateField('test_name','text',false,'Enter Test Name'),
    generateField('test_type','text',false,'Enter Test Type'),
    generateField('test_time','date',false,'Enter Test Name Test time'),
    generateField('test_report_delivery_time','date',false,'Test Report Delivery Time'),
    generateField('test_result','date',false,'Test Result'),
    generateField('comments','text',false,'Comments'),
    generateField('last_checkup_time','date',false,'Last Checkup Time'),
    generateField('blood_pressure','text',false,'Blood Pressure'),
    generateField('weight','text',false,'Weight'),
    generateField('height','text',false,'Blood Pressure'),

]

const doctorSignupFields=[
    generateField('first_name','text',true,"Enter your name"),
    generateField('last_name','text',true,"Enter last name"),
    generateField('password','password',true,"Enter Password"),
    generateField('gender','text',true,'Enter your Gender'),
    generateField('date_of_birth','date',true,"Enter your Bith Date"),
    generateField('email','email',true,"Enter your email"),
    generateField('blood_group','text',true," Blood Gorup"),
    generateField('contact_number','text',true," Enter your contact"),
    generateField('emergency_contact_number','text',true,"emenergency contact"),
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