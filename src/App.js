/*
✓ how to look like: https://appointment-planner-challenge.netlify.app/

Requirements:
✓  Keep track of the contacts and appointments data, each being an array of objects
✓ Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
✓ Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
✓ Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
✓ Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component
*/

import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const initialContacts= [
    {name: 'Sam', phone: '09123/456789', email:'sam@gmail.com' }, 
    {name: 'Max', phone: '0176/123456', email: 'max@gmail.com'}, 
    {name: 'Jason', phone: '0911/666777', email: 'jason@hell.es'}

  ]

  const [contacts, setContacts] = useState(initialContacts); //name, phone number, email
  const [appointments, setAppointments] = useState(); //title, contact, date, time

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [newContact, ...prev]
    })
  }

  const addAppointment = (newAppointment) => {
    setAppointments((prev) => {
      return [newAppointment, ...prev]
    })
  }
  
  return (
    <>
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
              addContact={addContact} 
              contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
