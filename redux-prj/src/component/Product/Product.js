import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const data = props.data;

  return (
    <div className="card mt-5">
      <div className="card-body">
        <img src={data.img} className="card-img-top" />
        <h4 className="card-title">{data.title}</h4>
        <p className="text-success">{data.price}</p>
        <Link to={"/details/" + data.id}>
          <span className="btn btn-primary"> Show More</span>
        </Link>
      </div>
    </div>
  );
}

export default Product;
