import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";

const pizzLogo =
  "https://static.vecteezy.com/system/resources/previews/007/944/092/non_2x/pizza-logo-design-template-illustration-free-vector.jpg";

export default function Navigation() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={pizzLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Pizzalooo
        </Navbar.Brand>
        <i class="bi bi-cart"></i>
      </Container>
      <IoCartOutline />
    </Navbar>
  );
}
