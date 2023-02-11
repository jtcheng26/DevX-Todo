import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  items: any[];
  markComplete: (tname: string, cname: string) => void;
};

export default function TodoList({ items, markComplete }: Props) {
  return (
    <ListDiv>
      {items.map((item) => (
        <TodoItem
          item={item}
          key={item.title}
          markComplete={() => markComplete(item.title, item.details)}
        />
      ))}
    </ListDiv>
  );
}
