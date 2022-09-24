/*
✓ is stateless
Requirements:
-> Render a form with:
    - The onSubmit attribute set to the callback function passed in via props
    - 3 controlled input components, to be used for the title, date and time appointment data
    - A ContactPicker component with the contacts list passed in via props
    - A submit button
-> Use getTodayString() to set the min attribute of the date input
*/

import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    AppointmentForm
  );
};
