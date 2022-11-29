import React from "react";
import shoes1 from "./../../img/1sh.jpg";
import Servise from "../Product/Servise";
import { useParams } from "react-router-dom";

function Detail() {

const {id} = useParams()

  const data = Servise.getProductById(id);

  return (
    <div className="row">
      <div className="col-5">
        <img src={data.img} alt="" width="100%" />
      </div>
      <div className="col-7">
        <h1>{data.title}</h1>
        <p>{data.desc}</p>
        <strong style={{ color: "green" }}>{data.price}</strong>
      </div>
    </div>
  );
}

export default Detail;
