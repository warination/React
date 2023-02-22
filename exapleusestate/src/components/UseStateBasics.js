import React, { useState } from 'react'

const UseStateBasics = () => {
    const [text, setText] = useState("hello World!");
    const handleChange = () => {
        if (text === "hello world!") {
            setText("Welcome to My World!!")

        } else if(text === "Welcome to My World!!"){
            setText("Hi!! I'm Warish.")
        }else{
            setText("hello world!")
        }

    }

    return (
        <div className='container'>
            <h1>{text}</h1>
            <button className='btn' onClick={handleChange}>change text</button>
        </div>
    )
}

export default UseStateBasics;