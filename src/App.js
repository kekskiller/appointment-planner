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

  const initialAppointments= [
    {title:'Happy Easter', contact:'Bunny Easter', date:'13.04.2023', time:'09:00'},
    {title:'Happy Christman', contact:'Claus Santa', date:'24.12.2022', time:'09:00'}
  ]

  const [contacts, setContacts] = useState(initialContacts); //name, phone number, email
  const [appointments, setAppointments] = useState(initialAppointments); //title, contact, date, time

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact]
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
