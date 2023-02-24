import { useState } from "react";
import data from "./data";
import List from "./List"

function App() {

  const removePerson = (id) =>{
    const newPeople =  people.filter((person)=> person.id !== id);
    setPeople(newPeople)
  }

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people = {people} removePerson = {removePerson}/>
      </section>
    </main>
  );
}

export default App;
