import React, { useState } from 'react';


const Event=()=>{

    let Name='Click Me'
    let purple='#8e44ad';
    let [curBg,updateBg]= useState(purple);
    let [NewName,updateName]= useState(Name);
    
    
    const ChangeBG=()=>{
        let Uname='Ouch!! 😜';
        updateName(Uname);
       let newcolor='#4d474d';
        updateBg(newcolor);
    }
    const ChangeBG1=()=>{
        let Uname='Ohh noo!! 😜';
        updateName(Uname);
       let newcolor='green';
        updateBg(newcolor);
    }
    return(
        <>
        <div style={{backgroundColor: curBg , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <button onMouseOver={ChangeBG} onMouseOut={ChangeBG1} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'purple', outline: 'none', borderRadius: '10px', border: '0px', margin: '10px 5px 10px 0' }}>{NewName}</button>
        </div>
        <div style={{backgroundColor: 'pink' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={ChangeBG} onDoubleClick={ChangeBG1} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'purple', outline: 'none', borderRadius: '10px', border: '0px', margin: '10px 5px 10px 0' }}>{NewName}</button>
        </div>
        <div style={{backgroundColor: 'yellow' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <button onKeyPress={ChangeBG} onKeyDown={ChangeBG1} style={{ padding: '0.5rem', color: 'white', backgroundColor: 'purple', outline: 'none', borderRadius: '10px', border: '0px', margin: '10px 5px 10px 0' }}>{NewName}</button>
        </div>
        </>
    )
}

export default Event;