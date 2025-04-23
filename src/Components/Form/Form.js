

import React from 'react';
import './Form.css';
import { User } from '../user/User';

function Form() {
  return (
    <div className="container">
      <div className="form">
        <table>
          <thead className="header">
            <tr>
              <th className="header-item">S.no</th>
              <th className="header-item">Employee Id</th>
              <th className="header-item">Name</th>
              <th className="header-item">Date</th>
              <th className="header-item">Day</th>
              <th className="header-item">Time</th>
              <th className="header-item">IN/Out</th>
              <th className="header-item">Duration</th>
            </tr>
          </thead>
          <tbody className="all-content">
            {User.map((user, index) => (
              <tr className="content-row" key={user.id}>
                <td className="data">{index + 1}</td>
                <td className="data">{user.id}</td>
                <td className="data">{user.name}</td>
                <td className="data">{user.date}</td>
                <td className="data">{user.day}</td>
                <td className="data">{user.time}</td>
                <td className="data">{user.InOut}</td>
                <td className="data">{user.totalDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
