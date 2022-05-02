import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const SingleProduct = ({ prod }) => {
  return (
    <Card>
      <Card.Img variant="top" src={prod.image} alt={prod.name} />
    </Card>
  );
};

export default SingleProduct;
