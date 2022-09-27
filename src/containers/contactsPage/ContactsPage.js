/*
Requirements:
✔ Receive two props:
    ✔ The current list of contacts
    ✔ A callback function for adding a new contact
✘ Keep track of three local state values: the current name, phone, and email entered into the form
✔ Check for duplicates whenever the NAME in the form changes and indicate the Name is a duplicate
✔ Only add a new contact on form submission if it does not duplicate an existing contact’s name
✔ A successful submission should clear the form
✘ In the Add Contact section, render a ContactForm with the following passed via props:
    ✘ local state variables
    ✘ local state variable setter functions
    ✘ handleSubmit callback function
✔ In the Contacts section, render a TileList with the contact array passed via props

*/

import React, {useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props; 

  const emptyContact={name:'', phone:'', email:''}
  const [newContact, setNewContact] = useState(emptyContact); //new object to add
  const   [duplicate, setDuplicate] = useState(false);

  const handleChange = ({target}) => {
    const {name, value} = target;
    if(name === 'name'){
      setDuplicate(nameCheck(value));
    }
    setNewContact((prev) => ({...prev, [name]:value}));
  }

  const nameCheck = (value) => {    
      const findDuplicate = contacts.some(element =>  element.name === value)  
      return findDuplicate;
    }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(!duplicate) {
      addContact(newContact);
      setNewContact(emptyContact); 
      e.target.reset();
    }else{alert ('This weirdo already exists!')}
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <ContactForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />
        <TileList 
          list={contacts}
        />
      </section>
    </div>
  );
};
