import React from "react";

export const ContactPicker = (props) => {
  const {contacts, handleChange, isEdit, presetContact} = props;
  const contactNames = contacts.map((contact) => contact.name)


  return (
    <select 
      name='contact'
      onChange = {handleChange}
    >
      <option value="test" key="-1" defaultValue="selected"> {(isEdit && presetContact) || 'No Contact Selected' }</option>
      {contactNames.map((name) => (
      <option key={name} value={name}> {name} </option>
      ))} 
    
    </select>
  );
};
