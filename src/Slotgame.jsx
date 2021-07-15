import React from 'react';

let machine = {
  padding: '1rem',
  marginBottom: '3rem',
  backgroundColor: 'white',
  color: 'green',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: '"monospace" , "poppins"',
  marginTop: '0px'

}
let span = {
  color: 'white',
  borderRadius: '10px',
  backgroundColor: 'gray',
  margin: '-1px 6px 0 6px',
  padding: '0.5rem'

}


const Game = (props) => {
  return (props.x === props.y) && (props.y === props.z) ?
    <div>
      <p style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"monospace" , "poppins"'
      }}>{props.x}{props.y}{props.z}</p>
      <h4 style={{
        color: 'green',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"monospace" , "poppins"',
        marginTop: '-3px'
      }}>It's Matching 💥</h4>
      <hr />

    </div> :

     <div>
      <p style={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"monospace" , "poppins"'
      }}>{props.x}{props.y}{props.z}</p>
      <h4 style={{
        color: 'green',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: '"monospace" , "poppins"',
        marginTop: '-3px'
      }}>It's not Matching 👎</h4>
      <hr />

    </div>

}

const Slotgame = () => {
  return (
    <>
      <h1 style={machine}>🎰 Welcome to <sapn style={span}> Slot machine game </sapn> 🎰</h1>
      <div><Game x='😄' y='😄' z='😄' />
        <Game x='😄' y='😿' z='😄' />
        <Game x='🏴' y='🏴' z='🏴' />
        <Game x='🏴' y='🏳️' z='🏴' />
      </div>
    </>
  )
}

export default Slotgame;