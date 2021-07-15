import React, { useContext } from 'react'
import { Myname,Lname } from './Context';

export const App2 = () => {
    const fname=useContext(Myname);
    const lname=useContext(Lname);

    return (
        <>
            <h2>2nd and Simpliest way Way to write {fname} {lname}</h2>
            <hr />
            <hr />

        </>
    )
}

export default App2;
