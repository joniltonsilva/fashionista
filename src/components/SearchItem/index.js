import React from "react";
import "./styles.scss";
export default function SearchItem({ product }) {
    
  return (
    <>
    
        <figure className="search__product--figure">
          <img
            className="search__product--img"
            src={
              product.image
                ? product.image
                : "https://via.placeholder.com/270x194/FFFFFF/?text=Imagem+Indisponível"
            }
            alt={product.name ? product.name : "Imagem indisponível"}
            title={product.name ? product.name : "Imagem indisponível"}
          />
        </figure>
        <div className="search__product--group-info">
          <div className="search__product--info">
            <p className="search__product--info-name">{product.name}</p>
          </div>
          <div className="search__product--price">
            <p className="search__product--price-final">
              {product.actual_price}
            </p>
            <p className="search__product--price-installments">
              {product.installments}
            </p>
          </div>
        </div>

    </>
  );
}
