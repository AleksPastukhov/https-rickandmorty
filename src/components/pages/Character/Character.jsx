import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../../../services/theRickandmortyApi';
import { NavItem, Wrapper } from './Character.styled';
import img from '../../../images/no-foto.png';

const Character = () => {
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState(null);
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    getCharacterById(characterId)
      .then(setCharacterData)
      .catch(err => console.log(err));
  }, [characterId]);

  if (!characterData) {
    return <h2>Loading...</h2>;
  }

  // const {
  //   image,
  //   name,
  //   gender,
  //   status,
  //   species,
  //   origin: { name: originName },
  //   type,
  // } = characterData;
  return (
    <Wrapper>
      <NavItem type="button" to={backLinkHref}>
        Go back
      </NavItem>
      <img
        src={characterData.image ? `${characterData.image}` : img}
        alt={`Foto ${characterData.name}`}
        width="300px"
        height="300px"
      />
      <h1>{characterData.name}</h1>
      <p>Informations</p>
      <ul>
        <li>
          <h2>Gender</h2>
          <p>{characterData.gender}</p>
        </li>
        <li>
          <h2>Status</h2>
          <p>{characterData.status}</p>
        </li>
        <li>
          <h2>Specie</h2>
          <p>{characterData.species}</p>
        </li>
        <li>
          <h2>Origin</h2>
          <p>{characterData.origin.name}</p>
        </li>
        <li>
          <h2>Type</h2>
          <p>{characterData.type}</p>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Character;
