import React from "react";
import { Link } from "react-router-dom";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import styled from "styled-components";
import useForm from "../../Hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";

const LoginPage = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 3rem;
`;

const LoginTitle = styled.h1`
  margin: 1.2rem 0 0.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #333;
  font-family: Poppins;
`;

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    getUser(token);
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    let response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
  }

  async function handleLogin(event) {
    event.preventDefault();

    const { url, options } = TOKEN_POST({
      username: username.value,
      password: password.value,
    });

    let response = await fetch(url, options);
    const data = await response.json();

    window.localStorage.setItem("token", data.token);
    getUser(data.token);
  }

  return (
    <LoginPage>
      <LoginTitle>Login</LoginTitle>
      <form action="" onSubmit={handleLogin}>
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

        <Button>Entrar</Button>
      </form>

      <Link to="/login/create">Cadastre-se</Link>
    </LoginPage>
  );
};

export default LoginForm;
