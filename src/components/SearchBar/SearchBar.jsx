import { AiOutlineSearch } from 'react-icons/ai';
import { SearchForm } from './SearchBar.styled';

export const SearchBar = ({ onInputChange, value }) => {
  return (
    <SearchForm>
      <button>
        <AiOutlineSearch />
      </button>

      <input
        type="text"
        name="name"
        autoComplete="off"
        value={value}
        onChange={e => onInputChange(e.target.value)}
        autoFocus
        placeholder="Filter by name..."
      />
    </SearchForm>
  );
};
