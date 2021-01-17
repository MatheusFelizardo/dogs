import React from "react";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styled, { keyframes } from "styled-components";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";

const LoginPageAnimation = keyframes`
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
`;

const TextShake = keyframes`
 10%,30%, 50%, 70%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(0px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
`;

const LoginPage = styled.section`
  max-width: 30rem;
  margin: 0 auto;
  padding: 2rem 0;
  animation: ${LoginPageAnimation} ease-in 1s;
`;

const LoginTitle = styled.h1`
  margin: 1.2rem 0 0.8rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: #333;
  font-family: Poppins;
  &::after {
    content: "";
    display: block;
    width: 3.5rem;
    height: 0.5rem;
    background: #fb1;
    margin-bottom: 2rem;
  }
`;

const CreatAccountWrapper = styled.div`
  text-align: right;
  max-width: 50rem;
  padding-right: 0.5rem;
  margin-top: 1rem;
  a {
    font-size: 1.2rem;
    color: #333;
    font-weight: 500;
    &:hover {
      display: block;
      animation: ${TextShake} 1s;
    }
  }
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, userLogout, error, loading, login } = React.useContext(
    UserContext,
  );

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <LoginPage>
      <LoginTitle>Login</LoginTitle>
      <form action="" onSubmit={handleSubmit}>
        <Input
          placeholder="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <p>Login ou senha inválidos.</p>}
      </form>
      <CreatAccountWrapper>
        <Link to="/login/create">Cadastre-se</Link>
      </CreatAccountWrapper>
    </LoginPage>
  );
};

export default LoginForm;
