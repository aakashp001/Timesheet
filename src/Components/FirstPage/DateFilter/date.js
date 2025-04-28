import React from 'react';

function DateFilter({ searchDate, setSearchDate }) {
  return (
    <div>
      <label>Search by Date: </label>
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)} // Update date on change
      />
    </div>
  );
}

export default DateFilter;
