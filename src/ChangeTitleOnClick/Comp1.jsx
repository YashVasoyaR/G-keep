import React from 'react'
import { useState , useEffect} from 'react';

export const Comp1 = () => {

    const [click,Uclick]=useState(0);
    const change=()=>{
        Uclick(click+1);
    }
    
    useEffect(()=>{
        document.title=`React Clicked ${click}`;
    });

    return (
        <>
            <button onClick={change}>Title change {click}</button><br/><hr />
        </>
    )
}

export default Comp1;
