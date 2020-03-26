import React, { useReducer } from 'react';

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

function NewIncidentReducer(state, action) {
  switch (action.type) {
    case 'newIncident':
      return { ...state, title: '', description: '', value: '' };
    case 'field':
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  title: '',
  description: '',
  value: ''
};

export default function NewIncident() {
  const [state, dispatch] = useReducer(NewIncidentReducer, INITIAL_STATE);

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    try {
      await api.post('incidents', state, {
        headers: {
          Authorization: ongId
        }
      });

      dispatch({ type: 'newIncident' });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <div className='new-incident-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be the hero logo' />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder='Titulo do caso'
            value={state.title}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'title',
                payload: event.target.value
              })
            }
          />
          <textarea
            placeholder='Descrição'
            value={state.description}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'description',
                payload: event.target.value
              })
            }
          />
          <input
            placeholder='Valor em reais'
            value={state.value}
            onChange={event =>
              dispatch({
                type: 'field',
                field: 'value',
                payload: event.target.value
              })
            }
          />

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
