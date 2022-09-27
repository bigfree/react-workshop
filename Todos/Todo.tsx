import React, { FC, Fragment } from 'react';
import RemoveTodo from '../Todos/RemoveTodo';

const Todo: FC = ({ todo, todos, setTodo }): JSX.Element => {
  return (
    <Fragment>
      <div className={'todo'}>
        <p>{todo.name}</p>
        <RemoveTodo 
          id={todo.id}
          todos={todos}
          setTodo={setTodo}
        />
      </div>
    </Fragment>
  );
};

export default Todo;
