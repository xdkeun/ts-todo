import { Todo } from "../model";

interface ListProps {
  todo: Todo[];
}
const List: React.FC<ListProps> = ({ todo }) => {
  return (
    <div>
      <p>Todo LIST</p>
      {todo.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};
export default List;
