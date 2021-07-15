
// import Minipr from './Minipr';
import Time from './Time';
import Netflix from './Netflix';
import Minipr from './Minipr';
import Sum, { mul, Div, Sub } from './Calc';
import Slotgame from './Slotgame';
import IncNumber from './IncNumber.jsx';
import UpdateTime from './UpdateTime.jsx';
import DigitalClock from './DigitalClock';
import Event from './Events.jsx';
import Form from './Form';
import Form2 from './Form2';
import CountDownCircle from './CountDownCircle.jsx'
import {UrgeWithPleasureComponent} from './CountDownCircle.jsx'
import Accordian from './component/accordian/Accordian';
import Context from './context/useContext/Context';
import Main from './ChangeTitleOnClick/Main.jsx';
import Pokemon from './API1/Pokemon';


let styles = {
  color: "blue",
  backgroundColor: 'pink',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: '"monospace" , "poppins"'
}


const App = () => {
  return (

    <>
    <Pokemon />
    <Main />
    <Context />
    <Accordian />
    {/* <UrgeWithPleasureComponent /> */}
    {/* <CountDownCircle /> */}
      <IncNumber />
      <Form2 />
      <Event />
      <DigitalClock />
      <UpdateTime />
      <Minipr />
      <Time />
      <Netflix />
      <div>

        <ul>
          <h1 style={styles}>Small Calculator</h1>
          <li>Sum of two num is {Sum(1, 2)}</li>
          <li>Sub of two num is {Sub(2, 3)}</li>
          <li>Div of two num is {Div(45, 10)}</li>
          <li>Mul of two num is {mul(2, 3)}</li>
        </ul>
      </div>

      <Slotgame />
      <Form />
    </>
  );
}



export default App;
