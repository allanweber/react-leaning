import React from 'react';
import { connect } from 'react-redux';
import {
  showAll,
  showCompleted,
  showNotCompleted,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_NOT_COMPLETED,
} from '../redux/actions/filter-actions';

const Filter = ({ filter, showAll, showCompleted, showNotCompleted }) => {
  return (
    <div>
      <div className="filters">
        <button className={filter === SHOW_ALL ? 'active' : ''} onClick={showAll}>
          All
        </button>
        <button className={filter === SHOW_COMPLETED ? 'active' : ''} onClick={showCompleted}>
          Completed
        </button>
        <button
          className={filter === SHOW_NOT_COMPLETED ? 'active' : ''}
          onClick={showNotCompleted}>
          Not Completed
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { showAll, showCompleted, showNotCompleted })(Filter);
