import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar({ active }) {
  const navigate = useNavigate();

  const navItems = [
    {
      key: 'home',
      label: 'Главная',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9.5z"/></svg>
      ),
      path: '/'
    },
    {
      key: 'quotes', 
      label: 'Цитаты',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M7 17h3l2-4V7H6v6h3l-2 4zm7 0h3l2-4V7h-6v6h3l-2 4z"/></svg>
      ),
      path: '/quotes'
    },
    {
      key: 'matches',
      label: 'Совпадения', 
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 21s-6.7-4.6-9.3-9.1C.7 8.3 2.5 4 6.5 4c2.1 0 3.9 1.2 5.5 3.1C13.6 5.2 15.4 4 17.5 4c4 0 5.8 4.3 3.8 7.9C18.7 16.4 12 21 12 21z"/></svg>
      ),
      path: '/matches'
    },
    {
      key: 'socionics',
      label: 'Соционика',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 21s-6.7-4.6-9.3-9.1C.7 8.3 2.5 4 6.5 4c2.1 0 3.9 1.2 5.5 3.1C13.6 5.2 15.4 4 17.5 4c4 0 5.8 4.3 3.8 7.9C18.7 16.4 12 21 12 21z"/></svg>
      ),
      path: '/socionics'
    },
    {
      key: 'clubs',
      label: 'Клубы',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M16 11c1.7 0 3-1.3 3-3S17.7 5 16 5s-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 2 2 3.4V20h6v-3.5c0-2.3-4.7-3.5-7-3.5z"/></svg>
      ),
      path: '/clubs'
    },
    {
      key: 'profile',
      label: 'Профиль',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z"/></svg>
      ),
      path: '/profile'
    }
  ];

  return (
    <nav className="navbar">
      {navItems.map(item => (
        <button
          key={item.key}
          className={active === item.key ? 'active' : ''}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default NavBar;