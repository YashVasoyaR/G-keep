import React, { useState,useEffect } from 'react';
import axios from 'axios';
// import { Data } from '../component/accordian/Data';

export const Pokemon = () => {
    const [num,Unum]=useState();
    const [Name,Uname]=useState();
    const [moves,Umoves]=useState();
    const[img,Uimg]=useState();
    
    useEffect(()=>{
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            const res1=await axios.get (`https://pokeres.bastionbot.org/images/pokemon/${num}.png`)
            console.log(res)
            console.log(res1);
            Uname(res.data.name);
            Umoves(res.data.moves[0].move.name);
            // Uimg(res1);

        }
        getData()
    })
    return (
        <>
        <h1>HEllo yashspeaking </h1>
        <h1>On Number <span style={{color:'Pink'}}>{num}</span></h1>
        <h1>Hello, I'm <span style={{color:'yellow',textTransform:'capitalize'}}>{Name}</span></h1>
        <h1>My Power is <span style={{color:'Red', textTransform:'capitalize'}}>{moves}</span></h1>
        <h3>{img}</h3>
            <select value={num} onChange={(event)=>{
                    Unum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='32'>32</option>
                <option value='25'>25-my Fav</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <br /><hr />
        </>
    )
}

export default Pokemon;
