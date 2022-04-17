import React from "react";
import styled from "styled-components/macro";
import ShoesCard from "../components/ShoeCart/ShoesCard";

export default function Shoes(props) {
  const { allShoes } = props;
  return (
    <Wrapper>
      {allShoes.map((shoe) => {
        return (
          <div key={allShoes.id} className="container">
            <ShoesCard
              id={shoe.id}
              name={shoe.name}
              style={shoe.style}
              price={shoe.price}
              description={shoe.description}
              productBy={shoe.productBy}
              imageURL={shoe.imageURL}
            />
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  // margin-top: 4rem;
  // text-align: center;
 
`;
