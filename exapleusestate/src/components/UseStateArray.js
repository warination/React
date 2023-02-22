import React, { useState } from 'react';
import {data} from "./data";

const UseStateArray = () => {

    const [people, setPeople] = useState(data);

    const removePerson = (id) =>{
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople)
    }

    return (
        <>
            {people.map((person) => {
                const {id, name} = person;
                return(
                <div className='item' key={id}>
                    <h4>{name}</h4>
                    <button onClick={() => removePerson(id)}>remove</button>
                </div>

                )
            })}
            <div className='container'>

            <button className='btn' onClick={() => setPeople([])}>Clear All</button>
            <button className='btn' onClick={() => setPeople(data)}>Reset</button>

            </div>
        <hr/>

        </>
    )
}

export default UseStateArray