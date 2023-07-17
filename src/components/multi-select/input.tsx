import React from "react";
import styled from "styled-components";
import { Item } from "../../api";

import ArrowIcon from "../../icons/arrow.svg";

const Container = styled.div<{ isOpen: boolean }>`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr auto;
  align-items: center;

  svg {
    transition: all 150ms ease;
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(180deg)" : ""};
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const SelectContent = styled.span`
  color: inherit;
`;

const Placeholder = styled.span`
  font-style: italic;
  color: #e0e0e0;
`;

type Props = {
  isOpen: boolean;
  selectedItems: Item[];
  placeholder: string;
};

function InputDisplay({ isOpen, selectedItems, placeholder }: Props) {
  return (
    <Container isOpen={isOpen}>
      <InputContainer>
        {selectedItems.length > 0 ? (
          <SelectContent>{selectedItems[0]?.label}</SelectContent>
        ) : (
          <Placeholder>{placeholder}</Placeholder>
        )}
      </InputContainer>
      <ArrowIcon />
    </Container>
  );
}

export default InputDisplay;
