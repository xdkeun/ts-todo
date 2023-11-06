import { Todo } from "../model";
interface ListProps {
  setTodo: (newTodo: Todo[]) => void;
  todo: Todo[];
}
const Add: React.FC<ListProps> = ({ todo, setTodo }) => {
  return (
    <button
      onClick={() => {
        setTodo([...todo, { id: 3, title: "LOL", content: "Fuck" }]);
      }}
    >
      Todo Add
    </button>
  );
};
export default Add;
