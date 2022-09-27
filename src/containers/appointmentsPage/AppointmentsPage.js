/*
✓ is stateful
Requirements:
✔ Receive three props:
  ✔- The current list of appointments
  ✔- The current list of contacts
  ✔- A callback function for adding a new appointment
✘ Keep track of four local state variables, the current title, contact, date, and time entered into the form --> is one object
✔ Add a new appointment on form submission
✔ Clear the form on submission
✔ In the Add Appointment section, render an AppointmentForm with the following passed via props:
    - local state variables
    - local state variable setter functions
    - handleSubmit callback function
-> In the Appointments section, render a TileList with the appointment array passed via props
*/

import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  const {contacts, appointments, addAppointment} = props;

  const emptyAppointment={title:'', name:'', date:'', time:''}
  const [newAppointment, setNewAppointment] = useState(emptyAppointment);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(newAppointment);
    setNewAppointment(emptyAppointment); 
    e.target.reset();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <AppointmentForm 
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  );
};
