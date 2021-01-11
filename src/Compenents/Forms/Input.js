import React from "react";
import styled from "styled-components";

const LoginInputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const LoginInput = styled.input`
  background: #eee;
  padding: 0.8rem;
  border: none;
  border-radius: 0.4rem;
  min-width: 85%;
  &:focus,
  &:hover {
    outline: none;
    box-shadow: inset 0 0 0 1px #fb1;
  }
`;

const LoginError = styled.p`
  margin-top: 0.2rem;
  color: #f31;
  font-size: 0.875;
`;

const Input = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  validate,
  error,
}) => {
  return (
    <LoginInputWrapper>
      {console.log(value)}
      <LoginInput
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <LoginError>{error}</LoginError>}
    </LoginInputWrapper>
  );
};

export default Input;
