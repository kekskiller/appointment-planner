import React from "react";

export const ContactForm = (props) => {
  let {   handleChange, 
          handleSubmit, 
          handleEditExit, 
          isEdit,
          tempTile, 
          saveContact, 
          index,
          handleEditChange,
          newContact
        } = props;
 
  const handleSave = (e) => {
    e.preventDefault();
    handleEditExit();
    saveContact(tempTile, index);
  }

  return (
    <form onSubmit={(isEdit && handleSave) || handleSubmit}>
      <label htmlFor='name'>Name</label> 
      <input type='text' 
        name='name'
        placeholder='Name' 
        value= {(isEdit && tempTile.name) || newContact.name}
        required 
        onChange={(isEdit && handleEditChange) || handleChange}>
      </input>

      <label htmlFor='phone'>Phone</label> 
      <input 
        type='tel' 
        name='phone'
        placeholder='Phone Number 000-0000' 
        pattern="[0-9]+-[0-9]+" 
        value= {(isEdit && tempTile.phone) || newContact.phone}
        required 
        onChange={(isEdit && handleEditChange) || handleChange}>
      </input>
      
      <label htmlFor='email'>Email</label> 
      <input 
        type ='email' 
        name='email'  
        placeholder='email@mail.com'  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        value= {(isEdit && tempTile.email) || newContact.email}
        required 
        onChange={(isEdit && handleEditChange) || handleChange}>
      </input>

      <input type='submit' value={(isEdit && 'SAVE') || 'ADD'} />
        {isEdit && <button onClick={handleEditExit}>CANCEL</button> }

    </form>
  );
};
