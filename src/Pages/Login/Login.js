import React, { useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/Google__G__Logo.svg.png";
import logo2 from "../../images/loging.png";
const Login = () => {
  const { handleGoogleLogIn, handleUserRegister, handleUserLogin } = useAuth();
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
    handleUserRegister(name, email, password);
  };
  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className=" text-white home-bg d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card bg-dark p-4 home-bg">
              <div className=" text-center">
                <h3>Please {isLogIn ? "Login" : "Register"}</h3>
                {!isLogIn && (
                  <div>
                    <input
                      onBlur={hanldeName}
                      type="text"
                      name="name"
                      id="userName"
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
                    id="userEmail"
                    placeholder="Email"
                  />{" "}
                  <br /> <br />
                  <input
                    onBlur={hanldePassword}
                    type="password"
                    name="password"
                    id="userPassword"
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
                    variant="dark"
                  >
                    <img style={{ width: "50px" }} src={logo2} alt="" />{" "}
                    Register
                  </Button>
                ) : (
                  <Button
                    className=" fw-bold text-white"
                    onClick={handleLogin}
                    variant="dark"
                  >
                    <img style={{ width: "50px" }} src={logo2} alt="" /> Login
                  </Button>
                )}
                <br /> <br />
                <h4>---- or ----</h4>
                <Button
                  className="px-4 fw-bold"
                  onClick={handleGoogleLogIn}
                  variant="dark"
                >
                  <img style={{ width: "30px" }} src={logo} alt="" /> Sign In
                  With Google Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
