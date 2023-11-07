import React, { useState } from "react";
import List from "./componets/List";
import Add from "./componets/Add";
import { Todo } from "./model";
import Header from "./componets/Header";
import styled from "styled-components";

let data: Todo[] = [
  // {
  //   id: 1,
  //   title: "타입스크립트 공부",
  //   content: "존나 하자",
  // },
  // {
  //   id: 2,
  //   title: "자바스크립트 공부",
  //   content: "조금 하자",
  // },
];

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>(data);
  return (
    <Layout>
      <Section>
        <Header length={todo.length} />
        <Add setTodo={setTodo} todo={todo} />
        <List todo={todo} />
      </Section>
    </Layout>
  );
};

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  padding: 20px 0;
  border-radius: 10px;
  border:1px solid black;
`;
export default App;
