import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";

function AppointmentTimeAndDateForm() {
  const { state }: { state: any } = useLocation();
  const [appointment,setAppointment] = useState<any[]>([])
  const [selectedDate,setSelectedDate] = useState('')
  const [doctorSlots,setDoctorSlots]=useState([])
  const [selectedSlotId,setSelectedSlotId] =useState('')
  const [bookedSlots,setbookedSlots] = useState<any[]>([])
  const [active, setActive] = useState(true)

  //Get data
   useEffect(()=>{
     fetch(`http://localhost:8081/api/slot/${state.doctor_id}`,{method:'GET'})
         .then(response => response.json())
         .then(data=>setDoctorSlots(data))
     fetch(`http://localhost:8081/api/appointment/`,{method:'GET',credentials: 'include'})
         .then(response => response.json())
         .then(data=>setAppointment(data))

   },[])
  //Get booked slot
useEffect(()=>{
  const tempBookedSlots:number[] = []
  appointment.map((appointment)=>{

  if(state.doctor_id==appointment.doctor.id &&
  selectedDate==appointment.appointment_date){
    tempBookedSlots.push(parseInt(appointment.slot.id))

  }
  setbookedSlots(tempBookedSlots)
  })

},[selectedDate])

  const makeAppointment = () =>
  {

    fetch(`http://localhost:8081/api/appointment/${state.doctor_id}/${selectedSlotId}`,{method:'POST',body: JSON.stringify({appointment_date:selectedDate}),credentials: 'include',headers: {"Content-type": "application/json; charset=UTF-8"}})
        .then(response => response.json())
        .then(data =>
        {
          console.log(data)
          alert(`Success .Appoint date ${data.appointment_date} for doctor ${data.doctor}`)
          window.location.reload();
        });
  }






  const btnCss = " appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 w-[12vw] leading-tight"
  return (
    <div className="w-full flex flex-col h-full items-center justify-center">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-10 text-2xl"
             htmlFor="grid-date">
        Doctor Appoinment Form
      </label>
      <div className="w-[60vw] h-[70vh] flex mt-16 items-center justify-center font-sans border border-green">
        <div className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">

            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="grid-date">
                Doctor Id:{state?.doctor_id}
              </label>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                     htmlFor="grid-date">
                Select Date
              </label>

              <input
                  onChange={(e)=>setSelectedDate(e.target.value)}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password" type="date"/>
                <p className="text-gray-600 text-xs italic">Select a appoinment date</p>
            </div>
          </div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                 htmlFor="grid-date">
            Select Time
          </label>
          {selectedDate?<div className="flex flex-wrap -mx-3 mb-2">
            { doctorSlots.map(slot=>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-2" key={slot['id']}>
                  <button className={bookedSlots.includes(slot['id'])? "cursor-not-allowed btn-disable bg-red-10 " + btnCss : "bg-sky-200 hover:bg-sky-600  focus:bg-sky-600" + btnCss}
                          id={slot['id']} onClick={(e)=>setSelectedSlotId(e.currentTarget.id)} placeholder="Albuquerque">
                    <span className="block mb-1">Slot no: {slot['id']}</span>
                    <span className="inline">{slot['start_time']}AM </span>
                    <span className="inline"> {slot['end_time']}PM</span>
                  </button>
                </div>
            )
            }

          </div>:''}
          <div className="w-full md:w-1/3 mb-6 md:mb-2 mt-4 align-items-start">
            <button className="bg-sky-500 px-4 py-2 rounded-lg" onClick={makeAppointment}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentTimeAndDateForm
