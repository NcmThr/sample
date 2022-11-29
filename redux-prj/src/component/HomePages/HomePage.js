import React from "react";
import "./homepage.css";
import shoes1 from "./../../img/1sh.jpg";
import shoes1h from "./../../img/1h.jpg";
import shoes2 from "./../../img/2sh.jpg";
import shoes2h from "./../../img/2h.jpg";
import shoes3 from "./../../img/3sh.jpg";
import shoes3h from "./../../img/3h.jpg";
import shoes4 from "./../../img/4sh.jpg";
import shoes4h from "./../../img/4h.jpg";
import shoes5 from "./../../img/5sh.jpg";
import shoes5h from "./../../img/5h.jpg";
import shoes6 from "./../../img/6sh.jpg";
import shoes6h from "./../../img/6h.jpg";
import ProductList from "./../Product/ProductList";
import Servise from "../Product/Servise";

class HomePage extends React.Component {
  
    state = { products : Servise.getProducts()}

  render() {
    return (
        <div className="contaier">
            <div className="row">
            <ProductList products={this.state.products} />
            </div>
        </div>
     
    );
  }
}

export default HomePage;
