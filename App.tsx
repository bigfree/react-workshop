import React, { FC, Fragment } from 'react';
import HelloWorld from './HelloWorld';
import './style.css';
import TodosComponent from './Todos/TodosComponent';

const App: FC = (): JSX.Element => {
  return (
    <Fragment>
      <HelloWorld />
      <TodosComponent />
    </Fragment>
  );
};

export default App;
