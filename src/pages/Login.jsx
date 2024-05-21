import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  const handleRegister = () => {
    console.log('Redirecionando para o cadastro...');
  };

  return (
    <div className="login-container">
      <h1>CRESCER CIDADÃO</h1>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">SENHA</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">ENTRAR</button>
        <div className="or-divider">
          <span>X</span>
        </div>
        <button type="button" onClick={handleRegister}>
          Não tem uma conta? Cadastrar
        </button>
      </form>
      <div className="alternative-login">
        <span>Faça login.com o Google</span>
      </div>
    </div>
  );
};

export default Login;


