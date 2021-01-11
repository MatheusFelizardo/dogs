import React from "react";
import styled from "styled-components";

const LoginButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  background-color: #fb1;
  color: #333;
  font-weight: 600;
  font-family: Poppins;
  padding: 0.6rem 1.2rem;
  margin: 0.8rem 0;
  min-width: 40%;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fea, 0 0 0 3px #fb1;
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
    box-shadow: none;
  }
`;

const Button = ({ children, ...props }) => {
  return <LoginButton {...props}>{children}</LoginButton>;
};

export default Button;
