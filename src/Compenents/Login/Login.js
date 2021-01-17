import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginPasswordLost from "./LoginPasswordLost";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="reset-password" element={<LoginPasswordReset />} />
      <Route path="forgot-password" element={<LoginPasswordLost />} />
    </Routes>
  );
};

export default Login;
