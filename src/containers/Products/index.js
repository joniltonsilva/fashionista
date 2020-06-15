import React from "react";
import Product from "../../components/Product";
import './styles.scss';

export default function Products({ products }) {
  return (
    <section className="products">
      <div className="app__container">
        <div className="products__grid">
          {products.length === 0 ? (
            <span>Carregando...</span>
          ) : (
            products.map((product, index) => (
              <Product key={index} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
