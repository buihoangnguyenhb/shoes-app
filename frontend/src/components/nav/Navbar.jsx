import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="logo">
        <Link to="/" className="disableTagA">
          <img
            src="https://i.pinimg.com/474x/82/8d/67/828d67596ebc81b19af675ee079db5b9.jpg"
            alt="err"
          />
        </Link>
      </div>
      <div className="link">
        <Link to="/">Trang chủ</Link>
        <Link to="/shoes">Shoes</Link>
        <Link to="/checkout">Giỏ hàng</Link>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 6%;
  margin-top: 10px;
  margin-bottom: 5%;
//   position: fixed;
//   top: 0;
//   z-index:99;
  .disableTagA {
    border: none important;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .link {
    a {
      color: white;
      padding: 8px 15px;
      text-decoration: none;
      &: hover {
        color: #ccc;
        border: 1px solid;
        border-radius: 7px;
      }
    }
  }
`;
