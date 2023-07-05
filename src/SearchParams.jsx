import React, {useState} from 'react';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  //fun fact: Can't use any conditional effects to render state.
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const breeds = ["tortoiseshell"];

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input 
            id="location" 
            placeholder="Location"
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </label>
        
        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed:
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={e => {
              setBreed(e.target.value)
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SearchParams;