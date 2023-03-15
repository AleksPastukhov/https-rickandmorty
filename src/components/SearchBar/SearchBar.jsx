import { AiOutlineSearch } from 'react-icons/ai';
import { SearchForm } from './SearchBar.styled';

export const SearchBar = ({ onFormSabmit }) => {
  return (
    <SearchForm onSubmit={onFormSabmit}>
      <button>
        <AiOutlineSearch />
      </button>

      <input
        type="text"
        name="name"
        autoComplete="off"
        autoFocus
        placeholder="Filter by name..."
      />
    </SearchForm>
  );
};
