import React from "react";
import styled from "styled-components";

import { Item } from "../../api";
import Cross from "../../icons/cross.svg";

const CrossIcon = styled(Cross)`
  color: #1b5e20;
  width: 16px;
  height: 16px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: #e8f5e9;
  transition: all 150ms ease;

  &:hover {
    background: #c8e6c9;
    svg {
      color: black;
    }
  }
`;

const TagName = styled.span`
  font-size: 14px;
  color: #1b5e20;
`;

type Props = {
  tagItem: Item;
  onRemoveItem: (id: number) => void;
};

function Tag({ tagItem, onRemoveItem }: Props) {
  return (
    <Container
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
      }}>
      <TagName>{tagItem.label}</TagName>
      <CrossIcon
        onClick={() => {
          onRemoveItem(tagItem.id);
        }}
      />
    </Container>
  );
}

export default Tag;
