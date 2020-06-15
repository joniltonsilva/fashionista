import React from "react";
import { connect } from 'react-redux';

import { addToCart, removeCart } from '../../store/cart/actions';

import './styles.scss';

const CartItem = ({ product, addToCart, removeCart }) => {

  const handleRemoveProduct = (quantity = 0) =>
    removeCart({ sku: product.sku, size: product.size, quantity });

  const handleAddProduct = () => {
    const productToCart = {
      name: product.name,
      finalPrice: product.finalPrice,
      size: product.size,
      sku: product.sku,
      image: product.image,
      installments: product.installments,
    };

    addToCart(productToCart);
  };

  return (
    <>
      <figure className="cart__product--figure">
        <img
          className="cart__product--img"
          src={
            product.image
              ? product.image
              : "https://via.placeholder.com/270x194/FFFFFF/?text=Imagem+Indisponível"
          }
          alt={product.name ? product.name : "Imagem indisponível"}
          title={product.name ? product.name : "Imagem indisponível"}
        />
        <button
          type="button"
          className="cart__product--remove"
          onClick={() => handleRemoveProduct()}
        >
          Remover
        </button>
      </figure>
      <div className="cart__product--group-info">
        <div className="cart__product--info">
          <p className="cart__product--info-name">{product.name}</p>
          <p className="cart__product--info-size">Tam. {product.size}</p>
          <p className="cart__product--info-quantity">
            <button
              type="button"
              className="cart__product--alter-quantity"
              onClick={() => handleRemoveProduct(1)}
            >
              <i className="fa fa-minus" />
            </button>
            {product.quantity}
            <button
              type="button"
              className="cart__product--alter-quantity"
              onClick={() => handleAddProduct()}
            >
              <i className="fa fa-plus" />
            </button>
          </p>
        </div>
        <div className="cart__product--price">
          <p className="cart__product--price-final">{product.finalPrice}</p>
          <p className="cart__product--price-installments">
            {product.installments}
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addToCart, removeCart })(CartItem);
