import React, {useState, useEffect} from 'react';
import Results from './Results';
import useBreedList from './useBreedList';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  //fun fact: Can't use any conditional effects to render state.
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  //square bracket arg2 of useEffect used to specify which state changes trigger rerender of component, i.e. [animal, location]
  //empty array runs the effect only once after initial render
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    const json = await res.json();
    setPets(json.pets);
  }

  

  return (
    <div className="search-params">
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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

    <Results pets={pets}/>

    </div>
  )
}

export default SearchParams;