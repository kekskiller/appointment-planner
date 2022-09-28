import React from "react";

export const ContactPicker = (props) => {
  const {contacts, handleChange} = props;
  const contactNames = contacts.map((contact) => contact.name)

  return (
    <select 
      name='contact'
      onChange = {handleChange}
    >
      <option value="test" key="-1" selected="selected"> No Contact Selected </option>
      {contactNames.map((name) => (
      <option key={name} value={name}> {name} </option>
      ))} 
    
    </select>
  );
};
