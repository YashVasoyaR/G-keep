import React, { useState } from 'react';


const Form2 = () => {
    let [Fullname, Uname] = useState({
        fname: '',
        lname: '',
        email: '',
        number: ''
    });

    const Input = (event) => {

        let value = event.target.value;
        let name = event.target.name;
        
        // const{value,name}= event.target;

        Uname((preValue) => {
            
            return {
                ...preValue,
                [name] : value
            }
            
            // if (name === 'fname') {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: preValue.number
            //     }
            // }

            // else if (name === 'lname') {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         number: preValue.number
            //     }
            // }

            // else if (name === 'email') {
            //     return {
            //         fname: preValue.fanme,
            //         lname: preValue.lname,
            //         email: value,
            //         number: preValue.number
            //     }
            // }

            // else if (name === 'number') {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         number: value
            //     }
            // }
        })
    }

    const showName = (event) => {
        event.preventDefault();
        alert('form submitted')
    }
    return (
        <>
            <div style={{ backgroundColor: 'gray', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{marginBottom:'-21px'}} >Hii, {Fullname.fname} {Fullname.lname}  </h3>
            <p style={{marginBottom:'-17px'}}>{Fullname.email}</p>
            <p>{Fullname.number}</p>
                <form onSubmit={showName}>
                   
                     <input type="text"
                        name='fname'
                        onChange={Input}
                        value={Fullname.fname}
                        autoComplete='off'
                    />   <br />

                    <input type="text"
                        name='lname'
                        onChange={Input}
                        value={Fullname.lname}
                        autoComplete='off'
                    />  <br />

                    <input type="email"
                        name='email'
                        onChange={Input}
                        value={Fullname.email}
                        // autoComplete='off'
                    />  <br />

                    <input type="number"
                        name='number'
                        onChange={Input}
                    // value={Fullname.number} 
                    />  <br />

                    <button>Submit</button>

                </form>
            </div>
        </>
    )
}
export default Form2;


// ----------------------------- 2nd way --------------------------------

// const Form2=()=>{

//     let [Fullname,UpdateName]= useState({
//         fname : '',
//         lname : '',
//         email : '',
//         number: ''
//     });

//     const Input=(event)=>{
//         let value= event.target.value;
//         let name = event.target.name;

//         UpdateName((preValue)=>{
//             if (name === 'fname') {
//                 return{
//                 fname : value ,
//                 lname : preValue.lname,
//                 email : preValue.email,
//                 number: preValue.number
//             }}

//             else if (name === 'lname') {
//                 return{
//                 fname : preValue.fname ,
//                 lname : value,
//                 email : preValue.email,
//                 number: preValue.number
//             }}
//             else if (name === 'email') {
//                 return{
//                 fname : preValue.fname ,
//                 lname : preValue.lname,
//                 email : value,
//                 number: preValue.number
//             }}
//             else if (name === 'number') {
//                 return{
//                 fname : preValue.fname ,
//                 lname : preValue.lname,
//                 email : preValue.email,
//                 number: value
//             }}
//         })
//     }

//     const showName=(event)=>{
//         event.preventDefault();
//         alert('Form Submitted !!!')
//     }
//     return(
//         <>
//         <div style={{backgroundColor: 'gray' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//             <form onSubmit={showName}>
//                 <label >Hello {Fullname.fname} {Fullname.lname} <br />{Fullname.email} {Fullname.number}</label><br />
//                 <input  type="text" 
//                         name='fname'
//                         onChange={Input}
//                         value={Fullname.fname}
//                 /><br />

//                 <input  type="text"
//                         name='lname'
//                         onChange={Input}
//                         value={Fullname.lname}
//                  />
//                   <br />

//                   <input  type="email"
//                         name='email'
//                         onChange={Input}
//                         value={Fullname.email}
//                  /> <br />

//                 <input  type="number"
//                         name='number'
//                         onChange={Input}
//                         value={Fullname.number}
//                  /> <br />

//                  <button>Submit</button><br />
//             </form>
//             </div>
//         </>
//     )
// }

// export default Form2;