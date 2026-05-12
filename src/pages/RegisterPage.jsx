import { useState } from "react";
import api from "../api/api.jsx";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/auth/register", {
      username,
      password,
    });

    navigate("/login");
  };

  return;
  <div>
    <h1>Register</h1>;
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter a Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Enter a password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </form>
    <button type="submit">Create Account</button>
  </div>;
};

export default RegisterPage;
