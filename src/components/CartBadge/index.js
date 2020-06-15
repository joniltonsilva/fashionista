import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const CartBadge = ({ count }) => {
  return (
    <span className="count__items">{count}</span>
  );
}

const mapStateToProps = state => {
  return { count: state.cart.reduce((total, product) => total + product.quantity, 0) };
}

export default connect(mapStateToProps)(CartBadge);
