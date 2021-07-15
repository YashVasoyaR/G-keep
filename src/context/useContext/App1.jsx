import React from 'react';
import { useState,useEffect} from 'react';
import { Myname, Lname } from './Context';

export const App1 = () => {

    const [num,Unum]=useState(0);
    const [nums,Unums]=useState(0);
    useEffect(()=>{
        // alert('Really??')
    },[num]);

    return (
        <>
            <Myname.Consumer>{(fname) => {
                return (
                    <Lname.Consumer>{(lname) => {
                       return(
                           <>
                           <button onClick={()=>{
                               Unum(num+1);
                           }}>U Get Popup {num}</button>
                           <button onClick={()=>{
                               Unums(nums+1);
                           }}>Don't get popup {nums}</button>
                           <h1>CreateContext / useContext</h1>
                           <h2>1st and long way to write  {fname} {lname}</h2>
                           </>
                       )
                    }}
                    </Lname.Consumer>
                        )


                    }}
            </Myname.Consumer>

        </>
    )
}

export default App1;
