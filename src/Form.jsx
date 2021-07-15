import React, { useState } from 'react';

const Form = () => {

    let [NewName, update] = useState();
    let [FullName, update1] = useState();


    const Input = (event) => {
        update(event.target.value);

    }

    let [NewPass, UpdatePass] = useState();
    let [LastName, PassUpdate] = useState();

    const Input1 = (event) => {
        UpdatePass(event.target.value);
    }

    let [Email,Updateemail]=useState();
// let [E_mail,NewUpdateMail]=useState();

    const Input2=(event)=>{
    Updateemail(event.target.value)

}

const showName = (event) => {
        event.preventDefault();
        update1(NewName);
        PassUpdate(NewPass);

    }
    return (
        <>
        <div style={{backgroundColor: 'pink' , display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <form  onSubmit={showName}>
                <label htmlFor="">Hello {FullName} {LastName} <br /> {Email}</label> <br />
                <input type="text" onChange={Input} value={NewName} placeholder='Enter Your Name' /><br />
                <input type="password" onChange={Input1} value={NewPass} placeholder='Enter Password' /><br />
                <input type="email" onChange={Input2} value={Email}></input><br />
                <button type='submit' >Submit</button>
            </form>
        </div>
        </>
    )
}

export default Form;