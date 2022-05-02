import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, byRating, sort, searchQuerry },
    productDispatch,
  } = CartState();
  console.log(byStock, byFastDelivery, byRating, sort, searchQuerry);
  return (
    <div className="filters">
      <span className="title"> Filter Products </span>{" "}
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>{" "}
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>{" "}
      <span>
        <Form.Check
          inline
          label="include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />{" "}
      </span>{" "}
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only "
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />{" "}
      </span>{" "}
      <span>
        <label style={{ paddingRight: 10 }}> Rating: </label>{" "}
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          // i is for some reason set to the index of star that we click on
        />{" "}
      </span>{" "}
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTER",
          })
        }
      >
        {" "}
        Clear Filters{" "}
      </Button>{" "}
    </div>
  );
};

export default Filters;
