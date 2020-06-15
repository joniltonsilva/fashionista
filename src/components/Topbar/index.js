/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import { connect } from 'react-redux';
import { showSidebar } from '../../store/sidebar/actions';
import CartBadge from "../CartBadge";


const Topbar = ({ showSidebar }) => {

  const handleOpenSearch = () => showSidebar(document.querySelector('#search'));
  const handleOpenCart = () => showSidebar(document.querySelector('#cart'));

  return (
    <header className="header">
      <nav className="container topbar">
        <Link to="/">
          <h1 className="topbar__title">Fashionista</h1>
        </Link>

        <ul className="topbar__actions">
          <li className="topbar__action-item"  onClick={handleOpenSearch}>
            <button type="button" className="topbar__action-item--button">
              <i className="fa fa-search" />
            </button>
          </li>

          <li className="topbar__action-item">
            <button type="button" className="topbar__action-item--button" onClick={handleOpenCart}>
              <i className="fa fa-shopping-bag" />
            </button>

            <CartBadge />
          </li>
        </ul>
      </nav>
    </header>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {showSidebar})(Topbar);
