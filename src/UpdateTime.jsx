import React, { useState } from 'react';

const UpdateTime=()=>{

    let state=useState();
    let time=new Date().toLocaleTimeString();

    let [curTime,update]= useState(time);

    const GetTime=()=>{
        let Newtime=new Date().toLocaleTimeString();
        update(Newtime);
    };
    return(
        <div style={{backgroundColor:'#5f6c5f', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3>{curTime}</h3>
                <button onClick={GetTime} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'purple', outline: 'none', borderRadius: '10px', border: '0px', margin: '-15px 5px 16px 0' }}>GetTime</button>
        </div>         
    )
}

export default UpdateTime;