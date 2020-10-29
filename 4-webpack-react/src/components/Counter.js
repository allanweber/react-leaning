import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from '../redux/actions/counter-actions';

const Counter = ({ value, increment, decrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.counter,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
