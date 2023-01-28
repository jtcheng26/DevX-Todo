import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components"

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

type Props = {
  items: any[];
};

export default function TodoList({ items }: Props) {
  return (
    <ListDiv>
      {items.map((item) => (
        <TodoItem item={item} key={item.title} />
      ))}
    </ListDiv>
  );
}
