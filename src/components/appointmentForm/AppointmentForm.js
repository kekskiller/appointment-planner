/*
✓ is stateless
Requirements:
-> Render a form with:
    - The onSubmit attribute set to the callback function passed in via props
    - 3 controlled input components, to be used for the title, date and time appointment data
    - A ContactPicker component with the contacts list passed in via props
    - A submit button
-> Use getTodayString() to set the min attribute of the date input
*/

import React from "react";

export const AppointmentForm = (props) => {
  const {handleSubmit} = props;


  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    
    <form onSubmit={handleSubmit}>

      <label for='name'>Title</label> 
      <input type='text' 
        name='name'
        placeholder='Name' 
        required />

      <label for='phone'>Contact</label> 
      <input 
        type='tel' 
        name='phone'
        placeholder='Phone Number 000-0000' 
        pattern="[0-9]+-[0-9]+" 
        required />
      
      <label for='email'>Date</label> 
      <input 
        type ='email' 
        name='email'  
        placeholder='email@mail.com'  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required /> 
        

      <label for='email'>Time</label> 
      <input 
        type ='email' 
        name='email'  
        placeholder='email@mail.com'  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required />

      <input type='submit' value='Add' />

    </form>
  );
};
