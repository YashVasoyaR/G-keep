import React, { useState } from 'react'
import { Data } from './Data';
import  Card  from './Card';

export const Accordian = () => {
    const [data,GetData]=useState(Data);

    return (
        <>
            {
                data.map((curVal)=>{
                    const {id}=curVal;
                    return <Card
                        key= {id} {...curVal}
                    />
                })
            }
        </>
    )
}

export default Accordian;