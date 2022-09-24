/*
✓
Requirements:
-> Receive two props:
    - The current list of contacts
    - A callback function for adding a new contact
-> Keep track of three local state values: the current name, phone, and email entered into the form
-> Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
-> Only add a new contact on form submission if it does not duplicate an existing contact’s name
-> A successful submission should clear the form
-> In the Add Contact section, render a ContactForm with the following passed via props:
    - local state variables
    - local state variable setter functions
    - handleSubmit callback function
-> In the Contacts section, render a TileList with the contact array passed via props
*/

import React from "react";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault(); 
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
