import React from 'react';
import { useState, useEffect } from "react";

export default function Time() {
    const [time, setTime] = useState(new Date());
useEffect(() => {
         setInterval(() => {
            setTime(new Date());
        }, 1000)}, []);

        const [dateState, setDateState] = useState(new Date());
        useEffect(() => {
               setInterval(() => setDateState(new Date()), 30000);
        }, []);
  return (
    <>
      <h3>Time : {time.toLocaleTimeString()}</h3>

      <h3>Date: 
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}

            </h3>
    </>
  )
}

