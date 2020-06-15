import React from "react";
import "../../styles/sidebar.scss";

import { connect } from "react-redux";

import { showSidebar } from "../../store/sidebar/actions";
import CartItem from "../CartItem";

import { formatDecimal } from '../../utils/format';

import './styles.scss';

const Cart = ({ cart, subTotal, showSidebar }) => {
  const handleCloseButtonClick = () =>
    showSidebar(document.querySelector("#cart"));

  return (
    <div id="cart" className="sidebar__menu">
      <header className="sidebar__header">
        <button
          type="button"
          className="sidebar__header--icon"
          onClick={handleCloseButtonClick}
        >
          <i className="fa fa-arrow-left" />
        </button>
        <p className="sidebar__header--title">Sacola</p>
      </header>

      <aside className="toggle__content">
        {cart.length ? (
          <ul className="cart__products">
            {cart.map((product, index) => (
              <li key={index} className="cart__product">
                <CartItem product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <span className="cart__empty">Nenhum item no seu carrinho</span>
        )}
      </aside>

      <footer className="cart__footer">
        <span className="cart__footer--subtotal">
          Valor a pagar: R$ {formatDecimal(subTotal)}        
        </span>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {  
  const cartToCalculate = [...state.cart].map(prod => {
    return { ...prod, finalPrice: parseFloat(prod.finalPrice.replace('R$', '').replace(',', '.')) }
  });
  const subTotal = cartToCalculate.reduce((acc, prod) => acc + (prod.finalPrice * prod.quantity), 0);
  return { cart: state.cart, subTotal };
};

export default connect(mapStateToProps, { showSidebar })(Cart);
