import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function LogIn() {
  const [id, setId] = useState('');

  const navigate = useNavigate();

  async function handleLogIn(e) {
    e.preventDefault();
    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      navigate('/profile');
    } catch (error) {
      alert('Falho no login, tente novamente');
    }
  }

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be the hero logo' />
        <form onSubmit={handleLogIn}>
          <h1>Faça seu long in</h1>
          <input
            placeholder='Seu ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Entrar
          </button>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt='heroes' />
    </div>
  );
}
