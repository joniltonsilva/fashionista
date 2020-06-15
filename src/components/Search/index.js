import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../../styles/sidebar.scss";
import SearchItem from "../SearchItem";
import { connect } from 'react-redux';

import { showSidebar } from '../../store/sidebar/actions';

import api from '../../services/api';


import "./styles.scss";


const Search = ({ showSidebar }) => {

  const history = useHistory();
  const [productsFiltered, setProductsFiltered] = useState([]);

  const handleCloseButtonClick = () => showSidebar(document.querySelector('#search'));
  
  let timeOut = null;

  const handleKeyUpSearch = text => {
    clearInterval(timeOut);
    timeOut = setTimeout(async () => {
      let results = [];
      if (text) {
        results = await api.getProductByText(text);
      }
      setProductsFiltered(results);
    }, 500);    
  };

  const handleProductClick = product => {    
    showSidebar(document.querySelector('#search'));  
    history.push(`/product/${product.slug}`);
  }

  return (
    <div id="search" className="sidebar__menu">
      <header className="sidebar__header">
        <button type="button" className="sidebar__header--icon" onClick={handleCloseButtonClick}>
          <i className="fa fa-arrow-left" />
        </button>
        <p className="sidebar__header--title">Buscar Produtos</p>
      </header>

      <aside className="search__content">
        <input
          type="text"
          className="search__input"
          placeholder="Digite o nome produto"
          onKeyUp={e => handleKeyUpSearch(e.target.value)} 
        />
        {productsFiltered.length ? (
          <ul className="search__products">
            {productsFiltered.map((product, index) => (
              <li key={index} className="search__product" onClick={() => handleProductClick(product)}>
                <SearchItem product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <span className="search__msg--not-found">
            Nenhum item encontrado para sua busca
          </span>
        )}
      </aside>
    </div>
  );
} 

const mapStateToProps = state => {
  return { catalog: state.catalog };
};

export default connect(mapStateToProps, {showSidebar})(Search);