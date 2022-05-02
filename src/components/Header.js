import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { cartReducer } from "../context/Reducers";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      {" "}
      <Container>
        <Navbar.Brand>
          <Link to="/"> Shopping Cart </Link>{" "}
        </Navbar.Brand>{" "}
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search a product"
            className="m-auto"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>{" "}
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge style={{ padding: "0px" }}> {cart.length} </Badge>{" "}
            </Dropdown.Toggle>{" "}
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {" "}
              {cart.length > 0 ? (
                <>
                  {" "}
                  {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="cartItemImg"
                      />
                      <div className="cartItemDetail">
                        <span> {prod.name} </span>{" "}
                        <span> $ {prod.price.split(".")[0]} </span>{" "}
                      </div>{" "}
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          });
                        }}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}> Cart is Empty! </span>
              )}{" "}
            </Dropdown.Menu>{" "}
          </Dropdown>{" "}
        </Nav>{" "}
      </Container>{" "}
    </Navbar>
  );
};

export default Header;
