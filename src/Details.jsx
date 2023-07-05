import { useParams } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import fetchPet from './fetchPet';

const Details = () => {
  const { id } = useParams();
  
  //React Query allows us to use asynchronous things as if they were synchronous state calls. Browse all the awesome results.options
  //pass arg1 key string, arg2 id as spec in func
  const results = useQuery(["details", id], fetchPet);
  //cute hacky Loading using react query result status. Code won't proceed until result complete
  if (results.isLoading) {
    return(
      <div className="loading-pane">
        <h2 className="loader"> 💫 </h2>
      </div>
    )
  }

  //error handling template from React Query
  if (results.isError) {
    return (
      <div> Error </div>
    )
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1> {pet.name} </h1>
        <h2>
          {pet.animal} -- {pet.breed} -- {pet.city}, {pet.state} 
          <button> Adopt {pet.name} </button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  )
}
export default Details;