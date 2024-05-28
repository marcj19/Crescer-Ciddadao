import React from 'react';
import './CadastroForm.css';

const CadastroForm = () => {
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <div className="logo">
          <img src="import Logo from '../assets/img/logo.png';" alt="Logo" />
        </div>
        <h2>Cadastro</h2>
        <p>Qual seu intuito?</p>
        <div className="button-group">
          <button className="btn">Patrocinador</button>
          <button className="btn">Doador</button>
          <button className="btn">Voluntário</button>
          <button className="btn">Participante</button>
        </div>
      </div>
    </div>
  );
};

export default CadastroForm;


