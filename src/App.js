import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { ThemeSwitch } from "./components/themeSwitch/ThemeSwitch";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import "./app.css";

export default function App() {
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const initialContacts =  JSON.parse(localStorage.getItem('contacts')) || [
    {name: 'Sam', phone: '09123-456789', email:'sam@gmail.com' }, 
    {name: 'Max', phone: '0176-123456', email: 'max@gmail.com'}, 
    {name: 'Jason', phone: '0911-666777', email: 'jason@hell.es'}
  ]
  const initialAppointments= JSON.parse(localStorage.getItem('appointments')) || [
    {title:'Happy Easter', contact:'Bunny Easter', date:'2023-04-13', time:'09:09'},
    {title:'Happy Christman', contact:'Claus Santa', date:'2022-12-24', time:'18:18'}
  ]

  const [contacts, setContacts] = useState(initialContacts); //name, phone number, email
  const [appointments, setAppointments] = useState(initialAppointments); //title, contact, date, time

  const deleteMe = (list) => {
    if(Object.keys(list)[0] === 'title') { 
      const newAppointments = appointments.filter(remainingAppointments => remainingAppointments.title !== list.title);
      localStorage.setItem('appointments', JSON.stringify(newAppointments));
      setAppointments(newAppointments);
    } else {
      const newContacts = contacts.filter(remainingContacts => remainingContacts.name !== list.name);
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      setContacts(newContacts);
      }
    }
  
  const addContact = (newContact) => {
    setContacts((prev) => {
      const newContacts = [...prev, newContact];
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return newContacts;
    })
  }
  const saveContact = (editedContact, index) => {
    setContacts((prev) => {
      prev[index] = editedContact; 
      const newContacts = [...prev];
      localStorage.setItem('contacts', JSON.stringify(newContacts)); 
      return newContacts;
    })
  }


  const addAppointment = (newAppointment) => {
    setAppointments((prev) => {
      const newAppointments = [newAppointment, ...prev];
      localStorage.setItem('appointments', JSON.stringify(newAppointments));
      return newAppointments;
    })
  }

  const saveAppointment = (editedAppointment, index) => {
    setAppointments((prev) => {
      prev[index]=editedAppointment;
      const newAppointments = [...prev];
      localStorage.setItem('appointments', JSON.stringify(newAppointments));
      return newAppointments;
    })
  }

  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
              deleteMe={deleteMe}
              addContact={addContact} 
              contacts={contacts}
              saveContact={saveContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              deleteMe={deleteMe}
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
              saveAppointment={saveAppointment}
            />
          </Route>
        </Switch>
      </main>
      <hr />
      <footer>
        <ThemeSwitch />
      </footer>
    </>
  );
}