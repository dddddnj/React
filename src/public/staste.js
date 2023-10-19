import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Staste = () => {
    // state: تخزين قيمة معينة
    const [count, setCount] = useState(0); // يجب تمرير قيمة افتراضية لحالة useState
    const [text, settext] = useState('hero'); // يجب تمرير قيمة افتراضية لحالة useState

 
    const ptinttext=(e)=>{
     settext(e.target.value)
     console.log(text);
    }
    
    return (
        <div>
            <h1>State</h1>
            {/* <Button onClick={max} className='btn btn p-5'> + </Button> */}
            <br/>
            <br/>
            <br/>
            {/* <Button onClick={min} className='btn btn p-5 m-5'> -</Button> */}
            <p>Count: {text}</p>

            <input type='text' value={text} onChange={ptinttext} />
        
        </div>
    );
};

export default Staste;
