import React, {useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const {contacts, addContact} = props; 

  const emptyContact={name:'', phone:'', email:''}
  const [newContact, setNewContact] = useState(emptyContact); 
  const   [duplicate, setDuplicate] = useState(false);

  const handleChange = ({target}) => {
    const {name, value} = target;
    if(name === 'name'){
      setDuplicate(nameCheck(value));
    }
    setNewContact((prev) => ({...prev, [name]:value}));
  }

  const nameCheck = (value) => {    
      return(contacts.some(element =>  element.name === value)  )
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
