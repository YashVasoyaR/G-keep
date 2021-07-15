import React from 'react'
import { useState } from 'react';

export const Card = ({Que,ans}) => {
    const [show,setShow]=useState(false);

    const ShowAns=()=>{
        
    }
    return (
        <>
            <div>
                <p onClick={()=>{setShow(!show)}}>{show ? '➖' : '➕'}</p>
                <h1>{Que}</h1>
            </div>
                { show && <p>{ans}</p>}
        </>
    )
}

export default Card;
