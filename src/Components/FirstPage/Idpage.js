import React from 'react';
import './Idpage.css';
import Logo from '../../Assets/Img/CompanyLogo.webp';
import Time from './Time/time';

export default function idPage() {
  return (
    <>
      <div className='id-overall'>
        
<div className='id-box'>
<img src={Logo} className='logo'></img>
<Time/>
<label for="id"> Employer ID:</label>
<input type="text" id="id" name="id" placeholder='Enter Employer ID ' className='id-input'></input>
{/* <label for="id"> Password:</label>
<input type="text" id="id" name="id" placeholder='Enter Your Password' className='id-input'></input> */}
<button>Login</button>
</div>

      </div>
    </>
  )
}
