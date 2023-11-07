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
  const [content, setContent] = useState<string>("");
  const todoAddHandler = () => {
    if (content !== "") {
      const maxId = Math.max(...todo.map((todoItem) => todoItem.id), 0);
      setTodo([...todo, { id: maxId + 1, content: content }]);
      setContent("");
    }
  };
  return (
    <Layout>
      <Input
        type="text"
        placeholder="할 일"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
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
  margin-bottom: 10px;
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
  font-size: 20px;
`;
export default Add;
