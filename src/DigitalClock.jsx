import React, { useState } from 'react';


const DigitalClock=()=>{


    let time= new Date().toLocaleTimeString();
    const state= useState();
    const [Utime,update]= useState(time);

    const newTime=()=>{
        time= new Date().toLocaleTimeString();
        update(time);
    }

    setInterval(newTime, 1000);

    return(
        <>
             <div style={{backgroundColor:'#e72f49b8', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                 <h1>{Utime}</h1>
             </div>
        </>
    )
}

export default DigitalClock;