import React, { useState } from "react";
import List from "./componets/List";
import Add from "./componets/Add";
import { Todo } from "./model";

let data: Todo[] = [
  {
    id: 1,
    title: "타입스크립트 공부",
    content: "존나 하자",
  },
  {
    id: 2,
    title: "자바스크립트 공부",
    content: "조금 하자",
  },
];

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>(data);
  return (
    <div>
      <Add setTodo={setTodo} todo={todo} />
      <List todo={todo} />
    </div>
  );
};

export default App;
