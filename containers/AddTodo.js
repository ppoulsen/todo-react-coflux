import React, { PropTypes } from 'react';
import { wrap } from 'coflux';

const AddTodo = ({ actions }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          actions.addTodo(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  actions: PropTypes.shape({
    addTodo: PropTypes.func.isRequired,
  }).isRequired,
};

let nextTodoId = 0;

export default wrap(AddTodo, {
  mapStateToProps() {
    return {
      _todos: 'todos',
    };
  },
  actions: {
    addTodo(props, next, value) {
      next({
        _todos: [
          ...props._todos,
          {
            id: nextTodoId++,
            text: value,
            completed: false,
          },
        ],
      });
    },
  },
});
