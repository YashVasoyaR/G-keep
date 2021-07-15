import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const CountDownCircle=()=>{
   return (<CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
  
   )}

   const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
    isPlaying
    duration={60}
    initialRemainingTime={15}
    colors="#A30000"
  />
  )
export default CountDownCircle;
export {UrgeWithPleasureComponent};