/*
✓ is stateful
Requirements:
-> Receive three props:
-> The current list of appointments
-> The current list of contacts
-> A callback function for adding a new appointment
-> Keep track of four local state variables, the current title, contact, date, and time entered into the form
-> Add a new appointment on form submission
-> Clear the form on submission
-> In the Add Appointment section, render an AppointmentForm with the following passed via props:
    - local state variables
    - local state variable setter functions
    - handleSubmit callback function
-> In the Appointments section, render a TileList with the appointment array passed via props
*/

import React from "react";

export const AppointmentsPage = () => {
  /*
  Define state variables for 
  appointment info
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
