import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import {
  HomeList,
  Link,
  CharacterSpecies,
  CharacterName,
  InfoBox,
  Card,
} from './CharactersList.styled';
import img from '../../images/no-foto.png';

export const CharactersList = ({ characters }) => {
  const location = useLocation();

  if (!characters) {
    return <h2>Loading...</h2>;
  }

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HomeList>
        {characters.map(({ id, image, name, species }) => (
          <Card key={id}>
            <Link to={`/character/${id}`} state={{ from: location }}>
              <img
                src={image ? image : img}
                alt={`Poster ${name}`}
                width="240px"
              />
              <InfoBox>
                <CharacterName>{name}</CharacterName>
                <CharacterSpecies>{species}</CharacterSpecies>
              </InfoBox>
            </Link>
          </Card>
        ))}
      </HomeList>
    </Suspense>
  );
};
