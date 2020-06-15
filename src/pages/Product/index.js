import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../services/api";

import { addToCart } from "../../store/cart/actions";

import "./styles.scss";
import Promotion from "../../components/Promotion";

const Product = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [selectedSize, setSelectedSize] = useState("");
  const [hasError, setHasError] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    async function loadProduct(slug) {
      const product = await api.getProductBySlug(slug);
      setProduct(product);
      setLoading(false);
    }

    loadProduct(slug);
  }, [slug]);

  const handleAddToCartClick = (product) => {
    if (!selectedSize) {
      setHasError(true);
      return;
    }

    const productToBag = {
      name: product.name,
      finalPrice: product.actual_price,
      size: selectedSize.size,
      sku: selectedSize.sku,
      image: product.image,
      installments: product.installments,
      quantity: 1,
    };
    console.log("AAAA" + JSON.stringify(productToBag));

    addToCart(productToBag);
  };

  const handleSelectedSize = (size) => {
    const buttons = document.getElementsByClassName(
      "product__size--select-button"
    );
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id === size.size) {
        setSelectedSize(size);
        buttons[i].classList.add("product__size--button-selected");
      } else {
        buttons[i].classList.remove("product__size--button-selected");
      }
    }
    setHasError(false);
  };

  return loading ? (
    <span>Carregando...</span>
  ) : (
    <section className="product">
      <figure className="product__image">
        <img
          className="product__image--img"
          src={
            product.image
              ? product.image
              : "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
          }
          alt={product.name ? product.name : "Imagem indisponível"}
          title={product.name ? product.name : "Imagem indisponível"}
        />
        {product.on_sale && (
          <Promotion discount={product.discount_percentage} />
        )}
      </figure>

      <div className="product__info">
        <p className="product__name">{product.name}</p>
        <div className="product__price">
          {product.on_sale ? (
            <div className="product--prices">
              <span className="product--promo-price">
                {product.regular_price}
              </span>
              <span className="product--price">{product.actual_price}</span>
            </div>
          ) : (
            <div className="product--unique-price">
              <span className="product--price">{product.actual_price}</span>
            </div>
          )}                   
          <span className="product__price--installments">
            Em Até {product.installments}
          </span>
        </div>
        <div className="product__size">
          <p className="product__size--text">Qual tamanho deseja?</p>
          {product.sizes
            .filter((size) => size.available)
            .map((size) => (
              <button
                key={size.size}
                id={size.size}
                type="button"
                className="product__size--select-button"
                onClick={() => handleSelectedSize(size)}
              >
                {size.size}
              </button>
            ))}
          {hasError && (
            <p className="product__message--error">
              Clique no tamanho desejado
            </p>
          )}
        </div>
        <button
          type="button"
          className="product__add-bag"
          onClick={() => handleAddToCartClick(product)}
        >
          Adicionar à Sacola
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addToCart })(Product);
