import React, {useState} from "react";
import { AppointmentForm } from "../appointmentForm/AppointmentForm";
import { ContactForm } from "../contactForm/ContactForm";

export const Editscreen = (props) => {
  const {handleEditExit, tile, contacts, saveAppointment, saveContact, index} = props;
  
  const [tempTile, setTempTile] = useState(tile);

  const handleEditChange = ({target}) => {
    const {name, value} = target;
    if (name === 'date'){
      alert(value)
    }
    setTempTile((prev) => ({...prev, [name]:value}));
  }

  return (
    <div className="editscreen">
        <div>
            <h1>Edit {Object.keys(tile).some(key => key==='title') ? 'Appointment' : 'Contact'}</h1>
            {Object.keys(tile).some(key => key==='title') ? 
              <AppointmentForm 
                contacts={contacts} 
                isEdit={true} 
                handleEditExit={handleEditExit} 
                tempTile={tempTile} 
                saveAppointment={saveAppointment} 
                index={index} 
                handleEditChange={handleEditChange}
              /> : 
              <ContactForm 
              isEdit={true} 
              handleEditExit={handleEditExit} 
              tempTile={tempTile}
              saveContact={saveContact}
              index={index} 
              handleEditChange={handleEditChange}
              />
            }

        </div>        
    </div>
  );
}