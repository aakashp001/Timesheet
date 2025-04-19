import React, { useState } from 'react';
import './Idpage.css';
import Logo from '../../Assets/Img/CompanyLogo.webp';
import Time from './Time/time';

export default function IdPage() {
  const [employeeId, setEmployeeId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId === '001') {
      alert('Welcome Aakash');
    } else {
      alert('Invalid ID');
    }
  };

  return (
    <div className='id-overall'>
      <div className='id-box'>
        <img src={Logo} className='logo' alt="Company Logo" />
        <Time />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter Employer ID"
            className="id-input"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
