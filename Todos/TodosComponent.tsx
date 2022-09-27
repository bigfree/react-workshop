import React, { FC, Fragment, useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodosComponent: FC = (): JSX.Element => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    console.log(`Todos state change`, todos);
  }, [todos]);

  return (
    <Fragment>
      <div className={'todos-component'}>
        <h2>Todo list:</h2>
        <AddTodo setTodo={setTodo} />
        <TodoList todos={todos} setTodo={setTodo} />
        {/* TODO: spravit pocet TODO */}
      </div>
    </Fragment>
  );
};

export default TodosComponent;
