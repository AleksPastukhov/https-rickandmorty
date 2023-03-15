import { useSearchParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getAllCharacters } from '../../../services/theRickandmortyApi';
import { CharactersList } from '../../CharactersList/CharactersList';
import { SearchBar } from '../../SearchBar/SearchBar';
import { SectionTitle, Container, Logo } from '../Home/Home.styled';
import logo from '../../../images/logo.jpeg';

const Home = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') ?? '';

  useEffect(() => {
    getAllCharacters()
      .then(resp => {
        const sortAdd = resp.results.sort((firstCharacter, secondCharacter) =>
          firstCharacter.name.localeCompare(secondCharacter.name)
        );
        setAllCharacters(sortAdd);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {}, [searchQuery]);

  const onFormSabmit = e => {
    e.preventDefault();
    const q = e.target.name.value;
    const nextParams = q !== '' ? { q } : {};
    setSearchParams(nextParams);
  };

  return (
    <Container>
      <SectionTitle>Characters</SectionTitle>
      <Logo src={logo} alt="Logo Rick and morty" width="600px" />
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchBar onFormSabmit={onFormSabmit} />
        <CharactersList characters={allCharacters} />
      </Suspense>
    </Container>
  );
};

export default Home;
