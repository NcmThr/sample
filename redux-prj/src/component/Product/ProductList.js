import React from "react";
import "./ProductList.css";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="row">
      {props.products.map((item) => (
        <div className="col-4" key={item.id}>
          <Product data={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
