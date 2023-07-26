import { dogsData } from "./data";
import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import DogDetails from "./DogDetails";

function App() {
  const [dogs, setDogs] = useState(dogsData);
  function addDog() {
    // Create a new dog named Rover
    // give the dog a "unique" id
    // normally a database would handle the unique id logic for you
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };

    // make a copy of the dogs array using destructuring
    // add rover, in this case the dog is added to the first array position
    // what would you need to change to add him as the last array item?
    setDogs([rover, ...dogs]);
  }

  function removeDog(dogID) {
    // use the filter method to remove any dogs that have a matching id
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    // set the dogs array to the new array that will not have the removed dog
    setDogs(filteredDogArray);
  }

  function updateDogAttendance(dogId) {
    // Copy the dogs array so that the copy can be updated
    const dogArray = [...dogs];
    // Find the dog with the matching id number's array position
    const index = dogArray.findIndex((dog) => dogId === dog.id);
    // Access the dog's present property and update the value
    // By using ! it will toggle the value of present
    dogArray[index].present = !dogArray[index].present;
    // Put the updated array into setDogs to update the dogs array
    setDogs(dogArray);
  }

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside></aside>
      <main>
        <button onClick={addDog}>Add a new dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span
                  onClick={() => updateDogAttendance(dog.id)}
                  style={
                    dog.present
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                >
                  {dog.name}{" "}
                </span>
                <DogDetails dog={dog} />
                <button onClick={() => removeDog(dog.id)}>remove</button>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
