import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      setMessage("Login Successful");
    } else {
      setMessage("Please enter username and password");
    }
  };

  return (
    <div className="app">
      <h1>Login Form Using State</h1>

      <div className="login-card">
        <h2>Login</h2>

        <div className="form-group">
          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>
          Login
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;