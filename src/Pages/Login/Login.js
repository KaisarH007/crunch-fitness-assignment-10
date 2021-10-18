import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, handleGoogleLogIn } = useAuth();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5 text-center">
          <h1>Please Login or Register</h1>
          <input type="text" name="name" id="" placeholder="Name" /> <br />{" "}
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
          /> <br /> <br />
          <input type="password" name="password" id="" placeholder="Password" />
          <h2>name:{user.displayName}</h2>
          <Button onClick={handleGoogleLogIn} variant="success">
            Google Sign
          </Button>
        </div>
        <div className="col-md-6">
          <img
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
