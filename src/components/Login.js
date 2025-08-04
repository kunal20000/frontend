import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigte = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigte("/");
    }
  }, []);
  const handleLogin = async () => {
    try {
      let res = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      res = await res.json();
      console.warn(res);
      if (res.name) {
        localStorage.setItem("user", JSON.stringify(res));
        navigte("/");
      } else {
        alert("Plase enter correct details!!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        className="inputBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
      />
      <button onClick={handleLogin} type="button" className="button">
        Login
      </button>
    </div>
  );
};

export default Login;
