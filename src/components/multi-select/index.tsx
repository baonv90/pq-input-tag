import React, { useState, useCallback } from "react";
import styled from "styled-components";

import InputDisplay from "./input";
import DropdownList from "./dropdown-list";
import { Item } from "../../api";

const SelectWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const CustomSelect = styled.div`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
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
        <DropdownList
          onUpdateItems={onUpdateItems}
          selectedItems={selectedItems}
        />
      )}
    </SelectWrapper>
  );
}

export default MultiSelect;
