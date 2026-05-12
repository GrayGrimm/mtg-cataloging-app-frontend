import { useState } from "react";
import api from "../api/api.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/login", {
      username,
      password,
    });

    login(res.data.token);
    navigate("/decks");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button type="submit">Login</button>
    </div>
  );
};

export default LoginPage;
