import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  //here we are destructuring twice so we are accessing CartState.state.products

  console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
