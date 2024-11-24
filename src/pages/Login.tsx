import React, { useState, useContext } from "react";  // Pridėkite React importą
import { useNavigate, Link } from "react-router-dom";
import { ROUTES } from "../router/consts";
import { useUser } from "../context/UserContext"; // Importuojame `useUser`
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import styles from "./Login.module.scss";

const Login = () => {
  const { login } = useUser(); // Naudojame useUser, kad gautume kontekstą
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email && password) {
      // Pridėkite tiek email, tiek password
      login({ email, password });
      navigate(ROUTES.HOME);
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className={styles.input}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Button type="submit">Log in</Button>
        <div className={styles.link}>
          <Link to={ROUTES.REGISTER} className={styles.signUp}>
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
