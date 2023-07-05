//takes arg1 of an array, pos[1] being the id.
const fetchPet = async ({queryKey}) => {
  const id = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/pets?id=${id}`
  );


  if (!apiRes.ok) {
    throw new Error(`Error on React Query Fetch for details/:id ${id}`);
  }

  return apiRes.json()
}

export default fetchPet;