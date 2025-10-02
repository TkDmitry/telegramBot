import React from 'react';
import NavBar from './NavBar/NavBar';

function Layout({ children, active }) {
  return (
    <div className="app-container">
      {children}
      <NavBar active={active} />
    </div>
  );
}

export default Layout;
