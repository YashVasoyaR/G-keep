import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const IncNumber = () => {
    // const state = useState();
    let [count, update] = useState(0);

    const IncNum = () => {
        update(count + 1);
    };

    const DecNum = () => {

        count > 0 ? update(count - 1) : alert('Sorry, Zero Limit reached')

        // if (Num>0) {
        //     Update(Num-1);
        // }
        // else{
        //     Update(0);
        //     alert('Sorry, Zero Limit reached')
        // }

    }

    return (
        <>

            <div style={{ backgroundColor: '#283d4f', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3>{count}</h3>
                <div style={{ margin: '0 0 1rem 0' }}>
                    <Tooltip title='Increase'>
                        <Button className='btn_green' variant="contained" color="primary" onClick={IncNum} style={{ marginRight: '15px' }}><AddIcon /></Button>
                    </Tooltip>

                    <Tooltip title="Decrease">
                        <Button className='btn_red' variant="contained" color="primary" onClick={DecNum}><RemoveIcon /></Button>
                    </Tooltip>
                </div></div>
        </>)
}

export default IncNumber;