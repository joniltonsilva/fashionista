import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Promotion from "../Promotion";
import { formatDecimal } from "../../utils/format";

export default function Product({ product }) {

  console.log(JSON.stringify(product));

  return (
    <div className="products__box">
      <Link to={`/product/${product.slug}`}>
        <figure className="product__image">
          <img
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
        <h3 className="product__name">{product.name}</h3>
        <div className="product--info">          
          {product.on_sale ? (
            <div className="product--prices">
              <span className="product--promo-price">
                {product.regular_price}
              </span>
              <span className="product--price">
                {product.actual_price}
              </span>
            </div>
          ) : (
            <div className="product--unique-price">
              <span className="product--price">
                {product.actual_price}
              </span>
            </div>
          )}
        </div>
       
      </Link>
    </div>
  );
}
