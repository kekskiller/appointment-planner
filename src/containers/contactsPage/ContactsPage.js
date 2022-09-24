/*
✓
Requirements:
✓ Receive two props:
    ✓ The current list of contacts
    ✓ A callback function for adding a new contact
-> Keep track of three local state values: the current name, phone, and email entered into the form
-> Check for duplicates whenever the NAME in the form changes and indicate the Name is a duplicate
-> Only add a new contact on form submission if it does not duplicate an existing contact’s name
-> A successful submission should clear the form
-> In the Add Contact section, render a ContactForm with the following passed via props:
    - local state variables
    - local state variable setter functions
    - handleSubmit callback function
-> In the Contacts section, render a TileList with the contact array passed via props

const found = arr.some(el => el.username === name);
*/

import React, {useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props; 
//  const addContact = props.addContact; 

  /*  Define state variables for contact info and duplicate check */
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const [newContactInfo, setNewContactInfo] = useState(); //new object to add
  const isDuplicate = false;

  const handleChange = ({target}) => {
    const {name, value} = target;
    const findDuplicate = contacts.some(element =>  element.name === target.value)

    if(findDuplicate){alert('you were cloned!!')}
  }
  


  const nameCheck =(value) => {


  }

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
        Contact Form goes here!
        <ContactForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
      </section>
    </div>
  );
};
