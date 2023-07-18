import React, { useState } from "react";
import styled from "styled-components";

import { useGetData } from "../../hooks/use-get-data";
import { Item } from "../../api";

const Dropdown = styled.div`
  height: 160px;
  overflow-y: auto;
  border-top: 1px solid #e0e0e0;
`;

const Option = styled.div<{ isSelected?: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  background: ${({ isSelected }) => (isSelected ? `#BBDEFB` : `#FFFFFF`)};

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

const Placeholder = styled.div`
  width: 60%;
  height: 14px;
  border-radius: 2px;
  background: #e0e0e0;
`;

const Empty = styled.div`
  color: #ababab;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type ListProps = {
  onUpdateItems: (id: Item) => void;
  selectedItems: Item[];
  options: Item[];
};

function Loader() {
  return (
    <Dropdown>
      {Array(5)
        .fill(null)
        .map((index: number) => (
          <Option key={index}>
            <Placeholder />
          </Option>
        ))}
    </Dropdown>
  );
}

function List({ options, onUpdateItems, selectedItems }: ListProps) {
  return (
    <>
      {options.length > 0 ? (
        options.map((option) => (
          <Option
            key={option.id}
            isSelected={selectedItems.includes(option)}
            onClick={() => onUpdateItems(option)}>
            {option.label}
          </Option>
        ))
      ) : (
        <Empty>No data!</Empty>
      )}
    </>
  );
}

type Props = {
  onUpdateItems: (id: Item) => void;
  selectedItems: Item[];
  searchValue: string;
};

function DropdownList({ onUpdateItems, selectedItems, searchValue }: Props) {
  const { data, loading } = useGetData(searchValue);

  if (loading) return <Loader />;
  if (!data) return null;

  return (
    <Dropdown>
      <List
        options={data}
        onUpdateItems={onUpdateItems}
        selectedItems={selectedItems}
      />
    </Dropdown>
  );
}

export default DropdownList;
