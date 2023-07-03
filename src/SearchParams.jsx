import React, {useState} from 'react';

const SearchParams = () => {
  //fun fact: Can't use any conditional effects to render state.
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input 
            id="location" 
            placeholder="Location"
            value={location} 
            onChange={e => setLocation(e.target.value)} 
          />
        </label>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SearchParams;