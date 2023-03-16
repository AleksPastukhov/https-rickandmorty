import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import {
  getAllCharacters,
  getCharacterByName,
} from '../../../services/theRickandmortyApi';
import { CharactersList } from '../../CharactersList/CharactersList';
import { SearchBar } from '../../SearchBar/SearchBar';
import { SectionTitle, Container, Logo } from '../Home/Home.styled';
import logo from '../../../images/logo.jpeg';

const Home = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('name') ?? '';

  useEffect(() => {
    if (searchQuery !== '') {
      return;
    }
    setSearchParams('');
    getAllCharacters()
      .then(resp => {
        const sortAdd = resp.results.sort((firstCharacter, secondCharacter) =>
          firstCharacter.name.localeCompare(secondCharacter.name)
        );
        setAllCharacters(sortAdd);
      })
      .catch(err => console.log(err));
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getCharacterByName(searchQuery)
      .then(resp => {
        const sortAdd = resp.results.sort((firstCharacter, secondCharacter) =>
          firstCharacter.name.localeCompare(secondCharacter.name)
        );
        setAllCharacters(sortAdd);
      })
      .catch(err => console.log(err));
  }, [searchQuery]);

  const onInputChange = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <SectionTitle>Characters</SectionTitle>
      <Logo src={logo} alt="Logo Rick and morty" width="600px" />
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchBar onInputChange={onInputChange} value={searchQuery} />
        <CharactersList characters={allCharacters} />
      </Suspense>
    </Container>
  );
};

export default Home;
