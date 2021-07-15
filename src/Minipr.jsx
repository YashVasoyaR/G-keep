import React from 'react';


let start = "Hello sir,";
let greeting = "";

let curDate = new Date(2021, 6, 25, 16);
curDate = curDate.getHours();

if (curDate >= 1 && curDate < 12) {
  greeting =  " Good Morning"
}
else if (curDate >= 12 && curDate < 19) {
  greeting = " Good Afternoon"
}
else {
  greeting = " Good Night"
}


let newStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '-30px',
}
let h1 = {
  display: 'flex',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '10px',
  background: 'white'
}

function Minipr(){
    return(
        <div style={newStyle}>
    <h1 style={h1}><span style={{ color: '#fa9191' }}>{start}{''}</span><span style={{ color: 'green', marginLeft:'7px' }}>{greeting}</span></h1>
  </div>
    );
}

export default Minipr;