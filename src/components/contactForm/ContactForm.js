/*
✓ is stateless
Requirements:
-> Render a form with:
    - The onSubmit attribute set
    - 3 controlled <input> elements, one for each piece of contact data
    - A submit button
-> Include a pattern attribute to the phone <input> with a regex that matches the phone locale of your preference
*/

import React from "react";

export const ContactForm = (props) => {

  const handleChange = props.handleChange;

  return (
    <form>
      <input type='text' name='name' onChange={handleChange}></input>
      <input type='text' name='phone' onChange={handleChange}></input>
      <input type ='text' name='email' onChange={handleChange}></input>
      <input type='submit' value='Add' />

    </form>
  );
};
