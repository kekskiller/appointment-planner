import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = (props) => {
  const {handleSubmit, handleChange, contacts} = props;


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
        placeholder='Appointment Title' 
        required 
        onChange ={handleChange}
        />

      <label for='contact'>Contact</label> 
      <ContactPicker 
        name='contact'
        contacts={contacts} 
        placeholder='Appointment With' 
        handleChange={handleChange} 
      />
      
             
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
