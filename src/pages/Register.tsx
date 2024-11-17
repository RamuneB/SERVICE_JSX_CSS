import React, { useState } from "react";  // Pridėkite React importą
import { useNavigate } from "react-router-dom"; 
import { ROUTES } from "../router/consts";
import { useUser } from "../context/UserContext";  // Naudojame useUser, kad gautume kontekstą
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import styles from "./Register.module.scss";  // Priklauso nuo jūsų stilių

const Register = () => {
  const { login } = useUser();  // Naudojame login funkciją, kad prisijungtume po registracijos
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Patikriname, ar slaptažodžiai sutampa
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    
    if (email && password) {
      // Sukuriame vartotoją (užregistruojame)
      login({ email, password });  // Galite patobulinti šią logiką pagal poreikį
      navigate(ROUTES.HOME);  // Nukreipiame į pagrindinį puslapį
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Register</h2>
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
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
          className={styles.input}
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;
