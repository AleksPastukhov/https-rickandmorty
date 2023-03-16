import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../../../services/theRickandmortyApi';
import {
  NavItem,
  Wrapper,
  Foto,
  Name,
  Subtitle,
  CharacterInfo,
} from './Character.styled';
import { ReactComponent as Arrow } from '../../../images/arrow_back.svg';
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

  const {
    image,
    name,
    gender,
    status,
    species,
    origin: { name: originName },
    type,
  } = characterData;
  return (
    <>
      <NavItem type="button" to={backLinkHref}>
        <Arrow /> GO BACK
      </NavItem>
      <Wrapper>
        <Foto
          src={image ? `${image}` : img}
          alt={`Foto ${name}`}
          width="300px"
          height="300px"
        />
        <Name>{name ? name : 'Oops!!! There is no information.'}</Name>
        <Subtitle>Informations</Subtitle>
        <CharacterInfo>
          <li>
            <h2>Gender</h2>
            <p>{gender ? gender : 'Oops!!! There is no information.'}</p>
          </li>
          <li>
            <h2>Status</h2>
            <p>{status ? status : 'Oops!!! There is no information.'}</p>
          </li>
          <li>
            <h2>Specie</h2>
            <p>{species ? species : 'Oops!!! There is no information.'}</p>
          </li>
          <li>
            <h2>Origin</h2>
            <p>
              {originName ? originName : 'Oops!!! There is no information.'}
            </p>
          </li>
          <li>
            <h2>Type</h2>
            <p>{type ? type : 'Oops!!! There is no information.'}</p>
          </li>
        </CharacterInfo>
      </Wrapper>
    </>
  );
};

export default Character;
