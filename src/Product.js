import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import productData from "./productsData";
import "./product.css";

function Product() {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  console.log(`./images/products/product_${id}.jpg`);

  useEffect(() => {
    const newProduct = productData.find(
      (product) => product.id === parseInt(id)
    );
    setName(newProduct.name);
  }, []);

  return (
    <section>
      <div className="img-container">
        <img src={`/images/products/product_${id}.jpg`} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam possimus
          facilis nostrum quos rem reiciendis pariatur. Accusantium placeat
          nesciunt dignissimos et aliquid! Laborum, cupiditate fugit recusandae
          ex iste id consequuntur, ab alias incidunt mollitia rem numquam dicta
          labore debitis quas! Saepe, fuga? Numquam sapiente optio mollitia
          esse. Doloribus deleniti dolorum totam necessitatibus delectus ipsam.
          Praesentium sint hic nesciunt, quisquam animi cum necessitatibus fugit
          perferendis alias beatae nobis aut quaerat iure assumenda? Ab
          doloremque dolorem eos debitis velit, dignissimos earum, recusandae
          possimus harum provident, voluptatem consectetur in mollitia excepturi
          odio laboriosam expedita? Maxime optio mollitia nesciunt expedita
          fugiat a? Recusandae, accusamus.
        </p>
        <Link to="/products" className="btn">
          Back To Products
        </Link>
      </div>
    </section>
  );
}

export default Product;
