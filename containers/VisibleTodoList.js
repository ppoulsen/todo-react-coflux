import React, { PropTypes } from 'react';
import { wrap } from 'coflux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    default:
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const VisibleTodoList = ({ todos, visibilityFilter, actions }) => (
  <TodoList
    todos={getVisibleTodos(todos, visibilityFilter)}
    onTodoClick={actions.toggleTodo}
  />
);

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(React.PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    toggleTodo: PropTypes.func.isRequired,
  }).isRequired,
};

export default wrap(VisibleTodoList, {
  mapStateToProps() {
    return {
      todos: 'todos',
      visibilityFilter: 'visibilityFilter',
    };
  },
  actions: {
    toggleTodo(props, next, id) {
      next({
        todos: props.todos.map(t => {
          if (t.id === id) {
            return Object.assign({}, t, { completed: !t.completed });
          }
          return t;
        }),
      });
    },
  },
});
