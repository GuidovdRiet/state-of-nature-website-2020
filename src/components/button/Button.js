import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Button;

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.darkGrey};
  color: ${({ theme }) => theme.white};
  padding: 12px 17px;
  border: 0;
  border: 3px solid ${({ theme }) => theme.darkGrey};
  ${({ theme }) => theme.fontSmoothing};
  cursor: pointer;
  &:hover {
    border: 3px solid ${({ theme }) => theme.darkGrey};
    color: ${({ theme }) => theme.darkGrey};
    background: transparent;
    transition: background-color 0.2s ease-in-out;
  }
`;
