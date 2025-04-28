import React, { useState } from 'react';
import './admintable.css';
import male from '../../../Assets/Img/Male.jpg';
import female from '../../../Assets/Img/female.jpg';
import NameFilter from '../NameFilter/name.js';
import DateFilter from '../DateFilter/date.js'; 

const employeeData = [
  { id: '001', image: male, name: 'Aakash P', date: '2025-04-22', day: 'Tuesday', inTime: '9:30AM', outTime: '5:30PM', total: '8hrs' },
  { id: '002', image: male, name: 'Afzal R', date: '2025-04-22', day: 'Tuesday', inTime: '10:00AM', outTime: '5:00PM', total: '5hrs' },
  { id: '003', image: female, name: 'Gayathri V', date: '2025-04-02', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
  { id: '004', image: male, name: 'Gnanarathinam', date: '2025-04-22', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
  { id: '005', image: male, name: 'Hareesh', date: '2025-04-04', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
  { id: '006', image: male, name: 'Hari babu', date: '2025-04-22', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
  { id: '007', image: female, name: 'Kaviarasi', date: '2025-04-02', day: 'Tuesday', inTime: '9.00AM', outTime: '6.00PM', total: '9hrs' },
  { id: '008', image: male, name: 'Ponnuchamy V', date: '2025-04-22', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
  { id: '009', image: male, name: 'Tamilselvan', date: '2025-04-22', day: 'Tuesday', inTime: '9.00AM', outTime: '5.30PM', total: '8hrs 30min' },
];

function Admintable() {
  const [searchName, setSearchName] = useState('');  
  const [searchDate, setSearchDate] = useState('');  


  const filteredEmployees = employeeData.filter((emp) => {
    const matchesName = emp.name.toLowerCase().includes(searchName.toLowerCase());  
    const matchesDate = emp.date === searchDate || searchDate === '';  
    return matchesName && matchesDate;
  });

  return (
    <div className="bg">
   
      <NameFilter searchName={searchName} setSearchName={setSearchName} />
      

      <DateFilter searchDate={searchDate} setSearchDate={setSearchDate} />

      <div className="tab">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>EMPLOYEE ID</th>
              <th>IMAGE</th>
              <th>EMPLOYEE NAME</th>
              <th>DATE</th>
              <th>DAY</th>
              <th>IN-TIME</th>
              <th>OUT-TIME</th>
              <th>TOTAL-HOURS</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center' }}>
                  No matching results.
                </td>
              </tr>
            ) : (
              filteredEmployees.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.id}</td>
                  <td><img src={emp.image} alt={emp.name} /></td>
                  <td>{emp.name}</td>
                  <td>{emp.date}</td>
                  <td>{emp.day}</td>
                  <td>{emp.inTime}</td>
                  <td>{emp.outTime}</td>
                  <td>{emp.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admintable;

