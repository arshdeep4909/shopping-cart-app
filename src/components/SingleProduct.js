import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
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
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!prod.inStock}>
            {!prod.inStock ? "out of Stock" : "Add to Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
