import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

class ProductList extends React.Component {
  state = {
    products: [
      { title: " Apple ", price: 2000 },
      { title: " orange ", price: 2500 },
    ],
  };

  addBanana = () => {
    const banana = { title: "Banana", price: "4000" };
    this.setState({ products: [...this.state.products, banana] });
  };

  render() {
    return (
      <div className="menu-body">
        <h1></h1>
      </div>
    );
  }
}

function Product(props) {
  return (
    <div>
      <h2>
        {props.title} : {props.price} $
      </h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
