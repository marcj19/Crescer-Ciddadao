import React, { useState, useEffect } from 'react';
import './Login.css';
import Logo from '../assets/img/logo.png';
import userIcon from '../assets/img/img4.png';
import keyIcon from '../assets/img/keyIcon.png';
import googleIcon from '../assets/img/googleIcon.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    document.body.classList.add('login-body');
    setShowWelcomeModal(true); // Exibe o modal de boas-vindas ao montar o componente

    return () => {
      document.body.classList.remove('login-body');
    };
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
    // Lógica de autenticação ou redirecionamento após login
  };

  const handleRegister = () => {
    console.log('Redirecionando para o cadastro...');
    // Lógica para redirecionar para a página de cadastro
  };

  const handleGoBack = () => {
    window.history.back(); // Função nativa para voltar à página anterior
  };

  return (
    <>
      <div className={`welcome-modal ${showWelcomeModal ? 'show' : ''}`}>
        <div className="modal-content">
          <h2>Bem-vindo ao nosso site!</h2>
          <p>Aqui você pode fazer login para acessar nossos serviços.</p>
          <button onClick={() => setShowWelcomeModal(false)}>Continuar</button>
        </div>
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h1>JÁ FAÇO PARTE</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email"></label>
            <div className="input-icon-wrapper">
              <input
                type="email"
                id="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <img src={userIcon} alt="User Icon" className="input-icon" />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password"></label>
            <div className="input-icon-wrapper">
              <input
                type="password"
                id="password"
                placeholder="SENHA"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img src={keyIcon} alt="Key Icon" className="input-icon" />
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Lembrar de mim</label>
              <span className="forgot-password">
                <a href="https://animated-orbit-7v7pp674j56j2pwr9-5173.app.github.dev/">Esqueceu a senha?</a>
              </span>
            </div>
          </div>
          <button type="submit">ENTRAR</button>
          <div className="alternative-login">
            <img src={googleIcon} alt="Google Icon" className="google-icon" />
            <span className="google-text">Faça login com o Google</span>
          </div>
          <span className="forgot-password">
            <a href="https://animated-orbit-7v7pp674j56j2pwr9-5173.app.github.dev/">Não tem uma conta? Cadastrar</a>
          </span>
        </form>
        <button className="back-button" onClick={handleGoBack}>Voltar</button>
      </div>
    </>
  );
};

export default Login;

