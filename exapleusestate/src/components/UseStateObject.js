import React, { useState } from 'react'

const UseStateObject = () => {

    const [person, setPerson] = useState(
        {
            name: "Warish",
            age : 27,
            message : "Do not make the world cry"
        }
    )

    const changeMessage = () =>{
        setPerson({...person, age: 28, message: "I love Everyone!"})
    }
    return (
        <div className='container'>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>

            <button className='btn' onClick={changeMessage}>Change Message</button>

        </div>
    )
}

export default UseStateObject