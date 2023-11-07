import { Todo } from "../model";
import styled from "styled-components";
import Nothing from "./Nothing";
interface ListProps {
  todo: Todo[];
}
const List: React.FC<ListProps> = ({ todo }) => {
  return (
    <Article>
      {todo.length === 0 ? (
        <Nothing />
      ) : (
        todo.map((todo) => <p key={todo.id}>{todo.title}</p>)
      )}
    </Article>
  );
};

const Article = styled.article``;
export default List;
