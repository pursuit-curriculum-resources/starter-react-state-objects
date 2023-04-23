import { useState } from "react";
import React from "react";
import { dogsData } from "./data";

function App() {

  const [dogs, setDogs] = useState(dogsData);
  function addDog() {
    const rover = {
      id: dogs.length + 50,
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };
  
    setDogs ([rover, ...dogs])
  }
  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
        <button onClick={addDog}>Add a new dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span>{dog.name}</span>
              </li>
            );
          })}
        </ul>
      </header>
      <aside></aside>
      <main></main>
    </div>
  );
}

export default App;
