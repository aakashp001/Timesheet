import React from 'react';
import { useState, useEffect } from "react";
import './time.css';

export default function Time() {
// Time:
    const [time, setTime] = useState(new Date());
useEffect(() => {
         setInterval(() => {
            setTime(new Date());
        }, 1000)}, []);

//Date:
        const [dateState, setDateState] = useState(new Date());
        useEffect(() => {
               setInterval(() => setDateState(new Date()), 30000);
        }, []);
 //Day:
        const [day, setDay] = useState(new Date());
        useEffect(() => {
               setInterval(() => setDay(new Date()), 1000);
        }, []);       
  return (
    <>
      <h3>Time : <span className='value'>{time.toLocaleTimeString()}</span></h3>

      <h3>Date: 
             <span className='value'>
             {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
             </span>

            </h3>
<h3>Day: 
                 <span className='value'>
                 {' '}
                {day.toLocaleDateString('en-GB', {
                     weekday: 'long',
                })}
                 </span>
                 </h3>
    </>
  )
}

