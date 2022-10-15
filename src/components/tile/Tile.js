import React, {useState} from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { Editscreen } from "../editscreen/Editscreen";

export const Tile = (props) => {

  const {tile, deleteMe, contacts, saveAppointment, saveContact, index} = props;

  const [menuActive, setMenuActive] = useState(false);
  const handleMenuClick =() => setMenuActive(true);
  const handleMenuMouseOut = () => setMenuActive(false);

  const [editActive, setEditActive] = useState(false); 
  const handleEditIn = () => setEditActive(true);
  const handleEditExit = () => setEditActive(false);

  return (
    <div className="tile-container">
      
      <div 
        className="menu"
        onMouseLeave={handleMenuMouseOut}>
          <div
            className="menubutton"
            onClick={handleMenuClick} 
            >
              ⋮
          </div>    
          {menuActive && <Dropdown deleteMe={deleteMe} tile={tile} handleEditIn={handleEditIn} />}
      </div>

      {editActive && <Editscreen 
        handleEditExit={handleEditExit} 
        tile={tile} 
        contacts={contacts} 
        saveAppointment={saveAppointment} 
        saveContact={saveContact} 
        index={index} 
        />
      }

        {Object.values(tile).map((info, index) => (
          <div key={index} className={index===0 ? "tile-title" : "tile"}>{info}</div>
        ))}

    </div>
  );
};



