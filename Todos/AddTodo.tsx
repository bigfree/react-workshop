import { nanoid } from 'nanoid'
import React, { FC, Fragment, useEffect, useReducer, useState } from 'react';

const initialAddTodoState = {
  name: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setName':
      return {...state, name: action.payload};
    case 'clearName':
      return {
        name: ''
      };
    default:
      throw new Error();
  }
}

const AddTodo: FC = ({setTodo}): JSX.Element => {
  /**
   * Pouzitie cez hook useState
   */
  // const [value, setValue] = useState('');

  /**
   * Ukazka reducera (Redux like zapis), na podobnom prinice funguje redux/mobix
   * Vysvetlit v com sa to lisi
   */
  const [state, dispatch] = useReducer(reducer, initialAddTodoState);

  // useEffect(() => {
  //   console.log(`State value changed to: ${value}`);
  // }, [value]);

  /**
   * Conrolled element, plnim novy state s aktualnou hodnotou inputu
   */
  // const handleOnChange = (event) => {
  //   setValue(event.target.value);
  // };

  /**
   * Ak submitnem formular prida sa nove todo cez "lift state up"
   * TODO: pozriet sa na problem lift state up
   */
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!state.name) {
      return;
    }
    
    setTodo((prevTodos) => [...prevTodos, {
      id: nanoid(), // pridavam id na lahsie mazanie a filtrovanie
      name: state.name
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
          <input 
            type="text"
            value={state.name}
            onChange={(event) => dispatch({type: 'setName', payload: event.target.value})}
          />
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
