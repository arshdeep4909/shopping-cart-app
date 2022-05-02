import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> $ {`${prod.price.split(".")[0]}`}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>Standart Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            // so if we have this product in our cart then we only want
            // to show add to cart and not remove from cart
            //.some checks if any elemnt of an array passes the given condition
            //it will loop through array and check if it's id is equal to prod.id
            cart.some((p) => p.id === prod.id) ? (
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  });
                }}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                disabled={!prod.inStock}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  });
                }}
              >
                {!prod.inStock ? "out of Stock" : "Add to Cart"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
