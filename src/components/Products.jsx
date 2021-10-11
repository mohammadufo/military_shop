import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "./../Data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Span = styled.span`
  text-align: center;
  justify-content: center;
  color: black;
  text-decoration: none;
  margin: 20px;
  align-items: center;
  display: flex;
`;

const Products = () => {
  return (
    <>
      <Container>
        {popularProducts.map((item) => (
          <NavLink to="/singleproduct">
            <Product item={item} key={item.id} />
          </NavLink>
        ))}
      </Container>
      <NavLink to="/products">
        <Span style={{ color: "black", textDecoration: "none" }}>
          All Products ...
        </Span>
      </NavLink>
    </>
  );
};

export default Products;
