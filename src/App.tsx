import React, { useState } from "react";
import List from "./componets/List";
import Add from "./componets/Add";
import { Todo } from "./model";
import Header from "./componets/Header";
import styled from "styled-components";
import "./root.css";

let data: Todo[] = [];

const App: React.FC = () => {
  const [todo, setTodo] = useState<Todo[]>(data);
  return (
    <Layout>
      <Section>
        <Header length={todo.length} />
        <Add setTodo={setTodo} todo={todo} />
        <List todo={todo} setTodo={setTodo} />
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
  width: 500px;
  height: 100vh;
  padding: 20px 0;
  border-radius: 10px;
  border: 1px solid black;
`;
export default App;
