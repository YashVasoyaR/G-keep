import React from 'react';

let n1 = new Date().toLocaleDateString();
let n2 = new Date().toLocaleTimeString();

let styles = {
    color: "yellow",
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    textShadow: '0px 10px 10px blue',
    fontFamily: '"monospace" , "poppins"'
}


function Time() {
    return (
        <>
        <h1 style={styles}>Yash Vasoya</h1>
        <p style={{                         /* #2 */
            color: "black",
            backgroundColor: '#fa9191',
            display: 'flex',
            fontFamily: "'monospace',''",
            justifyContent: 'center'
        }}>{`Todays Date is ${n1}`}</p>
        <p>{`Current Time is ${n2}`}</p>
        <p>{new Date().toTimeString()}</p>
        </>
    )
}

export default Time;