import * as React from 'react';

const { useState } = React;

interface SearchProps {
  search: (value: string) => void;
}

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const { search } = props;

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="theater-search">
      <input type="text" onChange={handleSearchInputChange} value={searchValue} />
      <input type="submit" onClick={callSearchFunction} value="SEARCH" />
    </form>
  );
};

export default Search;
