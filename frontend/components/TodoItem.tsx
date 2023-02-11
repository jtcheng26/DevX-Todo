import React from "react";
import styled from "styled-components";
import { createItem } from "./createItem";

type Props = { item: any };

const ItemDiv = styled.div`
  color: white;
  margin: 5px 0px;
  width: 100%;
  border: 2px solid white;
  border-radius: 5px;
  background-color: #272743;
  padding: 10px;
`;

export default function TodoItem({ item }: Props) {
  return (
    <ItemDiv>
      <h1>{item.title}</h1>
      <div>{item.details}</div>
    </ItemDiv>
  );
}
