import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <div>
          <h1>SHOES</h1>
          <address>
            <i class="fa-solid fa-location-dot"></i> HaNoi, VietNam
          </address>
        </div>
        <div>
          <h3>Contact</h3>
          <span>
            {" "}
            <i class="fa-solid fa-phone"></i>&ensp;Phone: +84.1234.56789
          </span>
          <div>
            <i class="fa-solid fa-envelope" />
            &ensp;buihoangnguyen@gmail.com
          </div>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <div className="icons-follow">
            <i class="fa-brands fa-twitter"></i> &ensp;
            <i class="fa-brands fa-instagram"></i> &ensp;
            <i class="fa-brands fa-youtube"></i> &ensp;
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  background-color: #111;
  color: #fff;
  width: 100%;
  height: 120px;
  margin-top: 70px;
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    .icons-follow {
        margin-top: 10px;
    }
  }
`;
