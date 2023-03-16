import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function getAllCharacters() {
  const respons = await axios.get(BASE_URL);
  return respons.data;
}

export async function getCharacterById(characterId = 1) {
  const respons = await axios.get(`${BASE_URL}/${characterId}`);
  return respons.data;
}

export async function getCharacterByName(name, abortController) {
  const options = {
    params: {
      name,
    },
    signal: abortController.signal,
  };

  const respons = await axios.get(`${BASE_URL}`, options);
  return respons.data;
}
