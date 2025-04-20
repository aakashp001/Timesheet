
import React from 'react';
import './Form.css';

function Form() {


  
  return (
    <div className="container">
      <div className="form">
        <table>
          <thead className="header">
            <tr>
              <th className="header-item"><a className="filter" href="#">S.no</a></th>
              <th className="header-item"><a className="filter" href="#">Employee Id</a></th>
              <th className="header-item"><a className="filter" href="#">Name</a></th>
              <th className="header-item"><a className="filter" href="#">Date</a></th>
              <th className="header-item"><a className="filter" href="#">Day</a></th>
              <th className="header-item"><a className="filter" href="#">In Time</a></th>
              <th className="header-item"><a className="filter" href="#">Out Time</a></th>
              <th className="header-item"><a className="filter" href="#">Total Duration</a></th>
            </tr>
          </thead>
          <tbody className="all-content">
            <tr className="content-row">
              <td className="data">1</td>
              <td className="data">1234</td>
              <td className="data">John Doe</td>
              <td className="data">2023-10-01</td>
              <td className="data">Monday</td>
              <td className="data">09:00 AM</td>
              <td className="data">05:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
            <tr className="content-row">
              <td className="data">2</td>
              <td className="data">5678</td>
              <td className="data">Jane Smith</td>
              <td className="data">2023-10-01</td>
              <td className="data">Monday</td>
              <td className="data">09:30 AM</td>
              <td className="data">05:30 PM</td>
              <td className="data">8 hours</td>
            </tr>
            <tr className="content-row">
              <td className="data">3</td>
              <td className="data">9101</td>
              <td className="data">Mike Johnson</td>
              <td className="data">2023-10-01</td>
              <td className="data">Monday</td>
              <td className="data">10:00 AM</td>
              <td className="data">06:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
