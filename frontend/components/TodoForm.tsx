import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column !important;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

const Button = styled.button`
  margin-top: 5px;
  height: 40px;
  background-color: #444444;
  border: none;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  transition: all 0.2s;
`;

const Input = styled.input`
  max-width: 400px;
  width: 80%;
  outline: none;
`;

const Textarea = styled.textarea`
  max-width: 400px;
  width: 80%;
  outline: none;
`;

type Props = {
  onTitleChange: (e) => void;
  onDetailsChange: (e) => void;
  title: string;
  details: string;
  onSubmit: () => void;
};

export default function TodoForm({
  title,
  details,
  onTitleChange,
  onDetailsChange,
  onSubmit,
}: Props) {
  return (
    <Form>
      <Label>
        Title:
        <Input type="text" value={title} onChange={onTitleChange} />
      </Label>
      <Label>
        Details:
        <Textarea value={details} onChange={onDetailsChange} />
      </Label>
      <Button onClick={onSubmit}>Add Note</Button>
    </Form>
  );
}
