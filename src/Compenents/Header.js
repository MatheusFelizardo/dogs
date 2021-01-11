import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import loginImg from "../Assets/usuario.svg";
import styled from "styled-components";

const PageHeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
  background: #fff;
  top: 0;
`;

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  max-width: 50rem;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.4);
`;

const HeaderLink = styled(Link)`
  color: #333;
  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 17px;
    background: url(${loginImg}) no-repeat center center;
    margin-left: 0.5rem;
  }
`;

const Header = () => {
  return (
    <PageHeaderContainer>
      <HeaderContainer>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <HeaderLink className="Header_Login" to="/login">
          Login / Criar conta
        </HeaderLink>
      </HeaderContainer>
    </PageHeaderContainer>
  );
};

export default Header;
