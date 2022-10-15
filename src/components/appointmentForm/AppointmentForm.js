import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = (props) => {
  let { handleSubmit, 
        handleChange, 
        newAppointment, 
        contacts, 
        isEdit, 
        saveAppointment, 
        handleEditExit, 
        index, 
        tempTile,
        handleEditChange
      } = props;
  
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleSave = (e) => {
    e.preventDefault();
    handleEditExit();
    saveAppointment(tempTile, index);
  }

  return (
    <form onSubmit={ (isEdit && handleSave) || handleSubmit }>
      <label htmlFor='title'>Title</label> 
      <input type='text' 
        name='title'
        placeholder='Appointment Title' 
        value= {(isEdit && tempTile.title) || newAppointment.title}
        required 
        onChange ={(isEdit && handleEditChange) || handleChange}
        />

      <label htmlFor='contact'>Contact</label> 
      <ContactPicker 
        name='contact'
        contacts={contacts}
        placeholder='Appointment With' 
        presetContact={isEdit && tempTile.contact}
        value= { (isEdit && tempTile.contact) || newAppointment.contact}
        handleChange={(isEdit && handleEditChange) || handleChange}
        isEdit={isEdit}
      />      
             
      <label htmlFor='date'>Date</label> 
      <input 
        type ='date' 
        id='date'  
        name='date'
        min={getTodayString()} 
        value= {(isEdit && tempTile.date) || newAppointment.date}
        required 
        onChange ={(isEdit && handleEditChange) || handleChange}
        /> 
        

      <label htmlFor='time'>Time</label> 
      <input 
        type ='time' 
        name='time'  
        value= {(isEdit && tempTile.time) || newAppointment.time}
        required 
        onChange = {(isEdit && handleEditChange) || handleChange}
        />

      <div>
        <input type='submit' value={(isEdit && 'SAVE') || 'ADD'} />
        {isEdit && <button onClick={handleEditExit}>CANCEL</button> }
      </div>
    </form>
  );
};
