import { useState } from 'react';
import data from './data'
import SingleQuestion from './SingleQuestion';
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main >
    <div className='container'>
    <h3>Questions and answers about login</h3>
    <section>
      {
        question.map((question)=>{
          return(
            <SingleQuestion key={question.id} {...question}/>
          )
        })
      }
    </section>

    </div>

    </main>
  );
}

export default App;
