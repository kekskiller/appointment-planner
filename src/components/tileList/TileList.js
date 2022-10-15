import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  
  const {toTile, deleteMe, contacts, saveAppointment, saveContact} = props;

  return (
    <div className="all-tiles" >
      {toTile.map((tile, index) => (
        <Tile key={index} index={index} tile={tile} deleteMe={deleteMe} contacts={contacts} saveContact={saveContact} saveAppointment={saveAppointment} />
      ))}
    </div>
  );
};
