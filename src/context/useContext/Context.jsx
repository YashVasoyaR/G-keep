import React, { createContext } from 'react'
import App1 from './App1';
import App2 from './App2';

const Myname=createContext();
const Lname=createContext();

export const Context = () => {

     return (
        <>
            <Myname.Provider value={'Yash'}>
                <Lname.Provider value={'Vasoya'}>
                <App1 />
                <App2 />
                </Lname.Provider>
            </Myname.Provider>
            
        </>
    )
}

export default Context;
export { Myname,Lname } ;