import { nanoid } from 'nanoid';
import React, { FC, Fragment } from 'react';

const RemoveTodo: FC = ({ id, todos, setTodo }): JSX.Element => {
  const handleRemoveTodo = () => {
      const filteredTodos = todos.filter((todo) => {
          return todo.id !== id
      });
      setTodo(filteredTodos);
  };

  return (
    <Fragment>
      <div className={'remove-todo'}>
        <button onClick={handleRemoveTodo}>Remove</button>
      </div>
    </Fragment>
  );
};

export default RemoveTodo;
