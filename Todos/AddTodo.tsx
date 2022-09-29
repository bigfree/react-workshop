import { nanoid } from 'nanoid'
import React, { FC, Fragment, useEffect, useState } from 'react';

const AddTodo: FC = ({setTodo}): JSX.Element => {
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   console.log(`State value changed to: ${value}`);
  // }, [value]);

  /**
   * Conrolled element, plnim novy state s aktualnou hodnotou inputu
   */
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  /**
   * Ak submitnem formular prida sa nove todo cez "lift state up"
   * TODO: pozriet sa na problem lift state up
   */
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      return;
    }
    
    setTodo((prevTodos) => [...prevTodos, {
      id: nanoid(), // pridavam id na lahsie mazanie a filtrovanie
      name: value
    }]);

    // TODO: pridat clear na input noveho todo
  }

  /**
   * Nastavi todos state na prazdne pole, tym padom sa vsetky ulohy vymazu
   */
  const handleOnClick = (event) => {
    setTodo([]);
  }

  return (
    <Fragment>
      <div className={'add-todo'}>
        <form onSubmit={handleOnSubmit}>
          <input type="text" value={value} onChange={handleOnChange} />
          &nbsp;
          <button type="submit">Add todo</button>
        </form>
        &nbsp;
        <button onClick={handleOnClick}>Clear todos</button>
      </div>
    </Fragment>
  );
};

export default AddTodo;
