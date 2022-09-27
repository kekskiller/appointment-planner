/*
✔ is stateless
Requirements:
✔ Render a form with:
    ✔ The onSubmit attribute set
    ✔ 3 controlled <input> elements, one for each piece of contact data
    ✔ A submit button
✔ Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference
*/

import React from "react";

export const ContactForm = (props) => {

  const {handleChange, handleSubmit, duplicate} = props;
 
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label> 
      <input type='text' 
        name='name'
        placeholder='Name' 
        required 
        onChange={handleChange}>
      </input>

      <label for='phone'>Phone</label> 
      <input 
        type='tel' 
        name='phone'
        placeholder='Phone Number 000-0000' 
        pattern="[0-9]+-[0-9]+" 
        required 
        onChange={handleChange}>
      </input>
      
      <label for='email'>Email</label> 
      <input 
        type ='email' 
        name='email'  
        placeholder='email@mail.com'  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required 
        onChange={handleChange}></input>

      <input type='submit' value='Add' />

    </form>
  );
};
