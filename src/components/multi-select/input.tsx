import React from "react";
import styled from "styled-components";
import { Item } from "../../api";

import ArrowIcon from "../../icons/arrow.svg";

import Tag from "./tag";

const Container = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr auto;
  align-items: center;
  user-select: none;
`;

const Arrow = styled(ArrowIcon)<{ isOpen: boolean }>`
  transition: all 150ms ease;
  transform: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "rotate(180deg)" : ""};
`;

const SelectContent = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  height: auto;
  max-height: 70px;
  overflow: auto;
`;

const Placeholder = styled.span`
  font-style: italic;
  color: #e0e0e0;
`;

type Props = {
  isOpen: boolean;
  selectedItems: Item[];
  placeholder: string;
  onRemoveItem: (id: number) => void;
};

function InputDisplay({
  isOpen,
  selectedItems,
  placeholder,
  onRemoveItem,
}: Props) {
  return (
    <Container>
      <div>
        {selectedItems.length > 0 ? (
          <SelectContent>
            {selectedItems.map((item) => (
              <Tag
                key={item.id}
                tagItem={item}
                onRemoveItem={() => onRemoveItem(item.id)}
              />
            ))}
          </SelectContent>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
      </div>
      <Arrow isOpen={isOpen} />
    </Container>
  );
}

export default InputDisplay;
