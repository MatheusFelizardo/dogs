import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleLogin(event) {
    event.preventDefault();

    const url = "https://dogsapi.origamid.dev/json/jwt-auth/v1/token";

    let api = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await api.json();
    console.log(data);
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Entrar</button>
      </form>

      <Link to="/login/create">Cadastre-se</Link>
    </section>
  );
};

export default LoginForm;
