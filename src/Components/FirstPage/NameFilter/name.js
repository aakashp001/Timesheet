
import React from 'react';

function NameFilter({ searchName, setSearchName }) {
  return (
    <div>
      <label>Search by Name: </label>
      <input
        type="text"
        placeholder="Enter employee name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
    </div>
  );
}

export default NameFilter;
