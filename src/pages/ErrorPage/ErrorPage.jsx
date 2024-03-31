import React from 'react';
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="error container">
      <h2>Tady nic není :)</h2>
      <p><NavLink to="/" className="error__link">Zpět</NavLink> na hlavní stranu.</p>
    </div>
  )
}