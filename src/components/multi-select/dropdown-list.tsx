import React, { useState } from "react";
import styled from "styled-components";

import { useGetData } from "./use-get-data";
import { Item } from "../../api";

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  width: 100%;
  height: 160px;
  overflow-y: auto;
  border-radius: 4px;
  z-index: 100;
  box-shadow: 0px 0px 8px 0px #e0e0e0;
`;

const Option = styled.div<{ isSelected?: boolean }>`
  padding: 8px;
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
      {options.map((option) => {
        const selected = selectedItems.includes(option);
        return (
          <Option
            key={option.id}
            isSelected={selected}
            onClick={() => onUpdateItems(option)}
          >
            {option.label}
          </Option>
        );
      })}
    </>
  );
}

type Props = Pick<ListProps, "onUpdateItems" | "selectedItems">;

function DropdownList({ onUpdateItems, selectedItems }: Props) {
  const { data, loading } = useGetData();

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
