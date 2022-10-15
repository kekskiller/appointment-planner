import React from "react";


export const Dropdown = (props) => {

    const {tile, deleteMe, handleEditIn} = props;

    const handleClick = () => {
        deleteMe(tile);
    }  

  return (
    <div className="dropdown">
        <div onClick={handleEditIn}>edit</div>
        <div onClick={handleClick}>delete</div>
    </div>
  );
}