import React, { PropTypes } from 'react';
import { wrap } from 'coflux';
import Link from '../components/Link';

const FilterLink = ({ filter, children, visibilityFilter, actions }) => (
  <Link
    active={filter === visibilityFilter}
    children={children}
    onClick={() => actions.setVisibilityFilter(filter)}
  />
);

FilterLink.propTypes = {
  actions: PropTypes.shape({
    setVisibilityFilter: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
};

export default wrap(FilterLink, {
  mapStateToProps() {
    return {
      visibilityFilter: 'visibilityFilter',
    };
  },
  actions: {
    setVisibilityFilter(props, next, filter) {
      next({
        visibilityFilter: filter,
      });
    },
  },
});
