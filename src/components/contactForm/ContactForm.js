/*
✔ is stateless
Requirements:
✔ Render a form with:
    ✔ The onSubmit attribute set
    ✔ 3 controlled <input> elements, one for each piece of contact data
    ✔ A submit button
-> Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference
*/

import React from "react";

export const ContactForm = (props) => {

  const {handleChange, handleSubmit} = props;
 
  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label> 
      <input type='text' name='name'   placeholder='Name Surname' required onChange={handleChange}></input>
      <label for='phone'>Phone</label> 
      <input type='tel' name='phone'   placeholder='Phone Number' required onChange={handleChange}></input>
      <label for='email'>Email</label> 
      <input type ='email' name='email'  placeholder='email@mail.com' required onChange={handleChange}></input>
      <input type='submit' value='Add' />

    </form>
  );
};
