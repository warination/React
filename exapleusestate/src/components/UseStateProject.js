import React, { useState } from 'react'

const UseStateProject = () => {

    const [count, setCount] = useState(0)
    return (
        <div className='container'>
            <h1>Regular Counter</h1>

            <h1>{count}</h1>
            <button className='btn' onClick={()=> setCount(count - 1)}>Decrease - </button>
            <button className='btn' onClick={()=> setCount(0)}>Reset</button>
            <button className='btn' onClick={()=> setCount(count + 1)}>Increase + </button>

        </div>
    )
}

export default UseStateProject