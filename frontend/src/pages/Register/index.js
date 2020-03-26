import React, { useReducer } from 'react';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import { Link, useNavigate } from 'react-router-dom';

function registerReducer(state, action) {
  switch (action.type) {
    case 'register_ong':
      return { ...state, name: '', email: '', whatsapp: '', city: '', uf: '' };
    case 'field':
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  name: '',
  email: '',
  whatsapp: '',
  city: '',
  uf: ''
};

export default function Register() {
  const [state, dispatch] = useReducer(registerReducer, INITIAL_STATE);

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const response = await api.post('ongs', state);
      alert(`Seu ID de acesso ${response.data.id}`);

      dispatch({ type: 'register_ong' });

      navigate('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente!');
    }
  }

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
        <form onSubmit={handleRegister}>
          <input
            placeholder='Nome da ONG'
            value={state.name}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'name',
                payload: event.target.value
              })
            }
            required
          />

          <input
            type='email'
            placeholder='E-mail'
            value={state.email}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'email',
                payload: event.target.value
              })
            }
            required
          />

          <input
            placeholder='Whatsapp'
            value={state.whatsapp}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'whatsapp',
                payload: event.target.value
              })
            }
            required
          />

          <div className='input-group'>
            <input
              placeholder='Cidade'
              value={state.city}
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'city',
                  payload: event.target.value
                })
              }
              required
            />

            <input
              placeholder='UF'
              style={{ width: 80 }}
              value={state.uf}
              onChange={event =>
                dispatch({
                  type: 'field',
                  field: 'uf',
                  payload: event.target.value
                })
              }
              required
            />
          </div>

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
