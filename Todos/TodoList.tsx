import React, { FC, Fragment } from 'react';
import Todo from './Todo';

const TodoList: FC = ({todos, setTodo}): JSX.Element => {
  return (
    <Fragment>
      <div className={'todo-list'}>
        {todos && todos.map((todo, index) => (
          <Todo 
            key={index}
            todo={todo}
            todos={todos}
            setTodo={setTodo}
          />
        ))}
        {!todos.length && (
          <p className={'empty-todos'}>Todos is empty 😢</p>
        )}
      </div>
    </Fragment>
  );
};

export default TodoList;
