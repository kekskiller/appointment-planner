import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const {contacts, appointments, addAppointment} = props;

  const emptyAppointment={title:'', contact:'', date:'', time:''}
  const [newAppointment, setNewAppointment] = useState(emptyAppointment);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewAppointment((prev) => ({...prev, [name]:value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(newAppointment);
    setNewAppointment(emptyAppointment); 
    e.target.reset();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
          <TileList 
            list={appointments}
          />

      </section>
    </div>
  );
};
