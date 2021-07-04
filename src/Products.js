import React from "react";
import { Link } from "react-router-dom";

import productData from "./productsData";

function Products() {
  document.title = "Products";
  return (
    <main>
      <h2>Products</h2>
      <div className="products">
        {productData.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img
                src={`./images/products/product_${product.id}.jpg`}
                alt={product.name}
              />
              <div className="info">
                <p>{product.name}</p>
                <Link to={`/product/${product.id}`}>Learn More</Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
