import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {

    const [value, setValue] = useState(0);

    useEffect(()=>{
        if(value>0){

            document.title = `new message(${value})`
        }
    }, [value])
    return (
        <div className='container'>
            <h1>{value}</h1>
            <button className='btn' onClick={()=> setValue(value + 1)}> Click me</button>
        
        </div>
    )
}

export default UseEffectBasics