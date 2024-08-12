import React from 'react';
import "./monthDropdown.css";

function MonthDropdown({ selectedMonth, onMonthChange }) {
  const months = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

  return (
    <select className="month-dropdown" value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}>
      {months.map((month, index) => (
        <option key={index} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
}

export default MonthDropdown;