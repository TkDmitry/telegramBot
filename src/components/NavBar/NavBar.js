import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar({ active }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button 
        className={active === 'home' ? 'active' : ''} 
        onClick={() => navigate('/')}
      >
        <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z"/></svg>
        <span>Главная</span>
      </button>
      <button 
        className={active === 'market' ? 'active' : ''} 
        onClick={() => navigate('/marketplace')}
      >
        <svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm2 4h14l-1.5 9h-11L5 10z"/></svg>
        <span>Маркет</span>
      </button>
      <button 
        className={active === 'collection' ? 'active' : ''} 
        onClick={() => navigate('/collection')}
      >
        <svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/></svg>
        <span>Коллекция</span>
      </button>
      <button 
        className={active === 'kyc' ? 'active' : ''} 
        onClick={() => navigate('/kyc')}
      >
        <svg viewBox="0 0 24 24"><path d="M3 7h18v10H3z"/></svg>
        <span>Кошелёк</span>
      </button>
      <button 
        className={active === 'profile' ? 'active' : ''} 
        onClick={() => navigate('/profile')}
      >
        <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z"/></svg>
        <span>Профиль</span>
      </button>
    </nav>
  );
}

export default NavBar;
