import React from "react";
import styled from "styled-components";

import Search from "../../icons/search.svg";
import Cross from "../../icons/cross.svg";

const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
`;

const CrossIcon = styled(Cross)`
  color: #f4511e;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 8px;
`;
const Input = styled.input`
  width: calc(100% - 56px);
  border: none;
  &:focus {
    outline: none;
  }
`;

type Props = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

function SearchInput({ searchValue, onSearchChange }: Props) {
  return (
    <Container>
      <SearchIcon />
      <Input
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onSearchChange(e.target.value);
        }}
      />
      {searchValue && <CrossIcon onClick={() => onSearchChange("")} />}
    </Container>
  );
}

export default SearchInput;
