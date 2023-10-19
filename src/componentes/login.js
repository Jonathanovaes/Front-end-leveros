import React, { useState } from 'react';
import GlobalStyles from "./loginStyle";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <GlobalStyles />
      <div id="sidebar" />
      <div id="container">
        <img src="/logoPosColor 1.png" alt="Leveros" />
        <div id="login-form">
          <h2>Acesse o Painel de Monitoramento</h2>
          <label htmlFor="username">Email:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Senha:</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" className="password-toggle-button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <br />
          <a href="/monitoramento">
            <button type="submit">Entrar</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
