import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import useFirbase from "../../Hooks/useFirebase";

const Login = () => {
  const { user, handleGoogleLogIn } = useAuth();
  return (
    <div>
      <h1>Please Login or Register</h1>
      <input type="text" name="name" id="" placeholder="Name" /> <br /> <br />
      <input type="email" name="email" id="" placeholder="Email" /> <br />{" "}
      <br />
      <input type="password" name="password" id="" placeholder="Password" />
      <h2>name:{user.displayName}</h2>
      <Button onClick={handleGoogleLogIn} variant="success">
        Googlr Sign
      </Button>
    </div>
  );
};

export default Login;
