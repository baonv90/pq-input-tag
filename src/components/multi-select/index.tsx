import React, { useState, useCallback } from "react";
import styled from "styled-components";

import InputDisplay from "./input";
import DropdownList from "./dropdown-list";
import { Item } from "../../api";
import { useDebounce } from "../../hooks/use-debounce";

import SearchInput from "./search";

const SelectWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const CustomSelect = styled.div`
  padding: 8px;
  border: 1px solid #e0e0e0;
  font-size: 14px;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-top: none;
  position: absolute;
  top: 100%;
  width: calc(100% - 2px);
  z-index: 100;
`;

type Props = {
  onChange: (values: Item[]) => void;
  selectedItems: Item[];
  placeholder?: string;
};

function MultiSelect({
  selectedItems,
  onChange,
  placeholder = "Placeholder",
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const searchValue = useDebounce(search, 300);

  const onUpdateItems = useCallback(
    (newItem: Item) => {
      const newSelectedItems = selectedItems.includes(newItem)
        ? selectedItems.filter((item) => item.id !== newItem.id)
        : [...selectedItems, newItem];

      onChange(newSelectedItems);
    },
    [onChange, selectedItems]
  );

  return (
    <SelectWrapper>
      <CustomSelect onClick={() => setIsOpen((open) => !open)}>
        <InputDisplay
          isOpen={isOpen}
          selectedItems={selectedItems}
          placeholder={placeholder}
          onRemoveItem={(id: number) =>
            onChange(selectedItems.filter((item) => item.id !== id))
          }
        />
      </CustomSelect>

      {isOpen && (
        <DropdownContainer>
          <SearchInput
            searchValue={search}
            onSearchChange={(value) => setSearch(value)}
          />
          <DropdownList
            searchValue={searchValue}
            onUpdateItems={onUpdateItems}
            selectedItems={selectedItems}
          />
        </DropdownContainer>
      )}
    </SelectWrapper>
  );
}

export default MultiSelect;
