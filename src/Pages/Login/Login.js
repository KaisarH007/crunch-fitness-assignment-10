import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import loginLogo from "../../images/login-logo.png";

const Login = () => {
  const { user, handleGoogleLogIn, handleUserRegister, handleUserLogin } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.valu);
  };

  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const hanldeName = (e) => {
    setName(e.target.value);
  };

  const handleRegister = () => {
    handleUserRegister(email, password);
  };
  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="home-bg text-white  d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 text-center">
            <input
              onChange={handleEmail}
              type="text"
              name="name"
              id=""
              placeholder="Name"
            />{" "}
            <br /> <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
            /> <br /> <br />
            <input
              onChange={hanldePassword}
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />{" "}
            <br /> <br />
            <Button
              className="px-4 fw-bold"
              onClick={handleRegister}
              variant="primary"
            >
              Register
            </Button>
            <Button
              className="m-3 px-4 fw-bold"
              onClick={handleLogin}
              variant="warning"
            >
              Login
            </Button>
            <br /> <br />
            <h4>---- or ----</h4>
            <Button
              className="px-4 fw-bold"
              onClick={handleGoogleLogIn}
              variant="success"
            >
              Google Sign In
            </Button>
          </div>
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={loginLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
