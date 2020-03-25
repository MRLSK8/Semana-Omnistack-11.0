import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be the hero logo' />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para o log in
          </Link>
        </section>
        <form>
          <input placeholder='Nome da ONG' />
          <input type='E-mail' placeholder='E-mail' />
          <input placeholder='Whatsapp' />

          <div className='input-group'>
            <input placeholder='Cidade' />
            <input placeholder='UF' style={{ width: 80 }} />
          </div>

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
