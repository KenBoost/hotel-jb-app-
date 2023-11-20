import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Reservation = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <h2>Reservations</h2>
      <div>
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={handleDateChange}
          inline // Mostrar el calendario en línea
        />
        {/* Otros campos para la reserva */}
        <input type="number" placeholder="Number of People" />
        <button>Check Availability</button>
      </div>
    </div>
  );
};

export default Reservation;
