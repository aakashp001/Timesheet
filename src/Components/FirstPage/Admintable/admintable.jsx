import React from 'react'
import './admintable.css';
import male from '../../../Assets/Img/Male.jpg'
import female from '../../../Assets/Img/female.jpg'
import bg from '../../../Assets/Img/bj.jpg'


function Admintable() {
  return (
    <>
    <div className='bg'>
    <div className='tab'>
        <table >
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
            <tr>
                <td>1</td>
 <td>001</td>
                <td><img src={male} alt="" /></td>
                <td>Aakash P</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9:30AM</td>
                <td>5:30PM</td>
                <td>8hrs</td>
            </tr>
            <tr>
                <td>2</td>
                <td>002</td>
                <td><img src={male} alt="" /></td>
                <td>Afzal R</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>10:00AM</td>
                <td>5:00PM</td>
                <td>5hrs</td>
            </tr>
            <tr>
                <td>3</td>
                <td>003</td>
                <td><img src={female} alt="" /></td>
                <td>Gayathri V</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
            <tr>
                <td>4</td>
                <td>004</td>
                <td><img src={male} alt="" /></td>
                <td>Gnanarathinam</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
            <tr>
                <td>5</td>
                <td>005</td>
                <td><img src={male} alt="" /></td>
                <td>Hareesh</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
            <tr>
                <td>6</td>
                <td>006</td>
                <td><img src={male} alt="" /></td>
                <td>Hari babu</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
            <tr>
                <td>7</td>
                <td>007</td>
                <td><img src={female} alt="" /></td>
                <td>Kaviarasi</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>6.00PM</td>
                <td>9hrs</td>
            </tr>
            <tr>
                <td>8</td>
                <td>008</td>
                <td><img src={male} alt="" /></td>
                <td>Ponnuchamy V</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
            <tr>
                <td>9</td>
                <td>009</td>
                <td><img src={male} alt="" /></td>
                <td>Tamilselvan</td>
                <td>22-04-2025</td>
                <td>Tuesday</td>
                <td>9.00AM</td>
                <td>5.30PM</td>
                <td>8hrs 30min</td>
            </tr>
        </table>
      
    </div>
    </div>
    </>
  )
}

export default Admintable
