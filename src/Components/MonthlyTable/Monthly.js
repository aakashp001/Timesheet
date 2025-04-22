import React from 'react'
import './Monthly.css'
// import { useState } from 'react'
function Monthly() {
  return (
    <>
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
              <th className="header-item"><a className="filter" href="#">Time In</a></th>
              <th className="header-item"><a className="filter" href="#">Time Out</a></th>
              <th className="header-item"><a className="filter" href="#">Total Duration</a></th>
            </tr>
          </thead>
          <tbody className="all-content">
            <tr className="content-row">
              <td className="data">1</td>
              <td className="data">001</td>
              <td className="data">Hari</td>
              <td className="data">22-06-2025</td>
              <td className="data">Monday</td>
              <td className="data">09:00 AM</td>
              <td className="data">06:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
            <tr className="content-row">
              <td className="data">2</td>
              <td className="data">001</td>
              <td className="data">Hari</td>
              <td className="data">23-06-2025</td>
              <td className="data">Tuesday</td>
              <td className="data">09:00 AM</td>
              <td className="data">06:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
            <tr className="content-row">
              <td className="data">3</td>
              <td className="data">001</td>
              <td className="data">Hari</td>
              <td className="data">24-06-2025</td>
              <td className="data">Wednesday</td>
              <td className="data">09:00 AM</td>
              <td className="data">06:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
            <tr className="content-row">
              <td className="data">4</td>
              <td className="data">001</td>
              <td className="data">Hari</td>
              <td className="data">25-06-2025</td>
              <td className="data">tuesday</td>
              <td className="data">09:00 AM</td>
              <td className="data">06:00 PM</td>
              <td className="data">8 hours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
 </>
  )
}

export default Monthly