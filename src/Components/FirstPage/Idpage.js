import React, { useState } from 'react';
import './Idpage.css';
import Logo from '../../Assets/Img/CompanyLogo.webp';
import Time from './Time/time';

export default function IdPage() {
  const [empId, setEmpId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [inTime, setInTime] = useState(null);
  const [outTime, setOutTime] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (empId.trim() === '') {
      alert('Please enter Employer ID');
      return;
    }
    const current = new Date();
    setInTime(current);

    const out = new Date(current);
    out.setHours(out.getHours() + 8);
    setOutTime(out);

    setLoggedIn(true);
  };

  return (
    <div className='id-overall'>
      <div className='id-box'>
        <img src={Logo} className='logo' alt="Company Logo" />
        <Time />

        {!loggedIn ? (
          <form onSubmit={handleLogin}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter Employer ID"
              className="id-input"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        ) : (
          <div className='timing-details'>
            <h3>Welcome {empId}</h3>
            <h3>In Time: <span className='value'>{inTime.toLocaleTimeString()}</span></h3>
            <h3>Out Time: <span className='value'>{outTime.toLocaleTimeString()}</span></h3>
          </div>
        )}
      </div>
    </div>
  );
}