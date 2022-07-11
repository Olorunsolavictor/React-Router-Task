import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  const goToSignUp = () => {
    navigate("/Signup", { replace: true });
  };

  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const emailInputHandler = (e) => {
    setEmailState(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPasswordState(e.target.value);
  };
  return (
    <div>
      <h1 id="Login-header">Welcome</h1>
      <input
        id="email"
        type={"email"}
        onChange={emailInputHandler}
        placeholder={"Email"}
      />
      <input
        id="password"
        type={"password"}
        onChange={passwordInputHandler}
        placeholder={"Password"}
      />
      <button
        id="gotosignup"
        onClick={() => {
          goToSignUp();
        }}
      >
        Sign Up Page
      </button>
    </div>
  );
}

export default Login;
