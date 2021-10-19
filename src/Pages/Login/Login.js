import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import loginLogo from "../../images/login-logo.png";

const Login = () => {
  const {
    handleGoogleLogIn,
    handleUserRegister,
    handleUserLogin,
    setUserName,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogIn, setIsLogIn] = useState(false);
  const [name, setName] = useState("");

  const toggleLogin = (e) => {
    setIsLogIn(e.target.checked);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const hanldeName = (e) => {
    setName(e.target.value);
  };

  const handleRegister = () => {
    handleUserRegister(email, password);
    setUserName(name);
  };
  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="home-bg text-white  d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 text-center">
            <h3>Please {isLogIn ? "Login" : "Register"}</h3>
            {!isLogIn && (
              <div>
                <input
                  onBlur={hanldeName}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                />
              </div>
            )}
            <br />
            <div>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />{" "}
              <br /> <br />
              <input
                onBlur={hanldePassword}
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            </div>
            <br />
            <br />
            <input onChange={toggleLogin} type="checkbox" name="" id="" />
            <label htmlFor="">Already register?</label>
            <br />
            {!isLogIn ? (
              <Button
                className="px-4 fw-bold"
                onClick={handleRegister}
                variant="primary"
              >
                Register
              </Button>
            ) : (
              <Button
                className="m-3 px-4 fw-bold"
                onClick={handleLogin}
                variant="warning"
              >
                Login
              </Button>
            )}
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
