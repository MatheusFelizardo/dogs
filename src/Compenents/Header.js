import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import loginImg from "../Assets/usuario.svg";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import Button from "./Forms/Button";

const PageHeaderContainer = styled.div`
  max-width: 50rem;
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

const UserOptionsWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const LogoutButton = styled(Button)`
  background: #f24f50;
  padding: 0.1rem 1rem;
  color: #fff;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 4px 3px #f24f50;
  }
`;

const Header = () => {
  const { data, login, userLogout } = React.useContext(UserContext);

  return (
    <PageHeaderContainer>
      <HeaderContainer>
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <UserOptionsWrapper>
            <HeaderLink className="Header_Login" to="/conta">
              {data.nome}
            </HeaderLink>
            {login && <LogoutButton onClick={userLogout}>Sair</LogoutButton>}
          </UserOptionsWrapper>
        ) : (
          <HeaderLink className="Header_Login" to="/login">
            Login / Criar conta
          </HeaderLink>
        )}
      </HeaderContainer>
    </PageHeaderContainer>
  );
};

export default Header;
