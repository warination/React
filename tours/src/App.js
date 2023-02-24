import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) =>{
    const newInfo = info.filter((tour)=> tour.id !== id);
    setInfo(newInfo)
  }

  const getTour = async () => {
    setLoading(true);

    // const response = await fetch(url);
    // const data = await response.json();
    // setInfo(data);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setInfo(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);

    }
  };

  useEffect(() => {
    getTour();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  if(info.length === 0){
    return(
      <main>
        <div className="title">
          <h2>
            Not Tours left
          </h2>
        <button className="btn" onClick={getTour}> Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours = {info} removeTour = {removeTour}/>
    </main>

  )
}

export default App;
