import React from "react";
import styled from "styled-components";

// Components"
import CardLogo from "./CardLogo";

const cards = {
  logo: CardLogo
};

const Card = ({ type, color, className, ...props }) => {
  const CardComp = cards[type];

  if (typeof cards[type] === "undefined") {
    return null;
  }

  return (
    CardComp && (
      <Wrapper color={color && color}>
        <CardComp {...props} className={className} />
      </Wrapper>
    )
  );
};

export default Card;

const Wrapper = styled.div`
  width: 50%;
  background-color: ${({ theme, color }) => theme[color]};

  @media (max-width: 905px) {
    width: 100%;
  }
`;
