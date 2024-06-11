import React, { useState, useEffect } from 'react';
import './Login.css';
import Logo from '../assets/img/logo.png';
import userIcon from '../assets/img/img4.png';
import keyIcon from '../assets/img/keyIcon.png';
import googleIcon from '../assets/img/googleIcon.png';
import { Link } from 'react-router-dom';

const Doador = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [errors, setErrors] = useState({});

  const validateUsername = () => {
    if (username === '') {
      setErrors(prev => ({ ...prev, username: 'Preencha um username!' }));
    } else {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  };

  const validateEmail = () => {
    if (email === '') {
      setErrors(prev => ({ ...prev, email: 'O email é obrigatório.' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const validatePassword = () => {
    if (password === '') {
      setErrors(prev => ({ ...prev, password: 'A senha é obrigatória.' }));
    } else if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: 'A senha precisa ter no mínimo 8 caracteres.' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const validateCpf = () => {
    if (cpf === '') {
      setErrors(prev => ({ ...prev, cpf: 'O CPF é obrigatório.' }));
    } else {
      setErrors(prev => ({ ...prev, cpf: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
    validateCpf();

    // Check validity after validation
    const isValid = !errors.username && !errors.email && !errors.password && !errors.cpf;

    if (isValid) {
      alert('CADASTRADO COM SUCESSO!');
      window.location.href = 'https://animated-orbit-7v7pp674j56j2pwr9-5173.app.github.dev/';
    }
  };

  return (
    <div className="container">
      <section className="header">
        <h2>Doador</h2>
      </section>
      <form onSubmit={handleSubmit} className="form">
        <div className={`form-content ${errors.username ? 'error' : ''}`}>
          <label htmlFor="username">Nome do usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={validateUsername}
            placeholder="Digite o nome do usuário..."
          />
          {errors.username && <span>{errors.username}</span>}
        </div>

        <div className={`form-content ${errors.email ? 'error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="Digite o seu email..."
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className={`form-content ${errors.password ? 'error' : ''}`}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            placeholder="Digite sua senha..."
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div className={`form-content ${errors.cpf ? 'error' : ''}`}>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            onBlur={validateCpf}
            placeholder="Digite seu CPF..."
          />
          {errors.cpf && <span>{errors.cpf}</span>}
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Doador;
