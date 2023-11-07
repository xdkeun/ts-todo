import { Todo } from "../model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";
interface ListProps {
  setTodo: (newTodo: Todo[]) => void;
  todo: Todo[];
}
const Add: React.FC<ListProps> = ({ todo, setTodo }) => {
  const [title, setTitle] = useState<string>("");
  const todoAddHandler = () => {
    if (title !== "") {
      setTodo([...todo, { id: todo.length, title: title }]);
      setTitle("");
    }
  };
  return (
    <Layout>
      <Input
        type="text"
        placeholder="할 일"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Plus icon={faPlus} onClick={todoAddHandler} />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #111111;
  padding-bottom: 10px;
`;

const Input = styled.input`
  all: unset;
  font-size: 25px;
`;

const Plus = styled(FontAwesomeIcon)`
  cursor: pointer;
  background-color: #111111;
  color: white;
  border-radius: 50%;
  padding: 10px;
`;
export default Add;
