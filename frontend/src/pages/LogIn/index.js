import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function LogIn() {
  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='be the hero' />
        <form>
          <h1>Faça seu long in</h1>
          <input type='text' placeholder='Seu ID' />
          <button className='button' type='submit'>
            Entrar
          </button>
          <Link to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='heroes' />
    </div>
  );
}
