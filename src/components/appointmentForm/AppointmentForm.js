/*
✔ is stateless
Requirements:
✔ Render a form with:
    ✔ The onSubmit attribute set to the callback function passed in via props
    ✔ 3 controlled input components, to be used for the title, date and time appointment data
    - A ContactPicker component with the contacts list passed in via props
    ✔ A submit button
✔ Use getTodayString() to set the min attribute of the date input
*/

import React from "react";

export const AppointmentForm = (props) => {
  const {handleSubmit, handleChange} = props;


  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label for='title'>Title</label> 
      <input type='text' 
        name='title'
        placeholder='Please Choose Title' 
        required 
        onChange ={handleChange}
        />

      <label for='contact'>Contact</label> 
      <select 
        type='text' 
        name='contact'
        placeholder='Phone Number 000-0000' 
        pattern="[0-9]+-[0-9]+" 
        required 
        onChange = {handleChange}
      >
        <option value="">- - - </option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Doe">Jane Doe</option>
      </select>
             
      <label for='date'>Date</label> 
      <input 
        type ='date' 
        id='date'  
        name='date'
        min={getTodayString()}  
        required 
        onChange ={handleChange}
        /> 
        

      <label for='time'>Time</label> 
      <input 
        type ='time' 
        name='time'  
        placeholder=''  
        required 
        onChange ={handleChange}
        />

      <input type='submit' value='Add' />

    </form>
  );
};
