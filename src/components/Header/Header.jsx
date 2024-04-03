import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header>
      <div className="container">
        <h1 className="site-title">
          <Link to="/">LeviExpress</Link>
        </h1>
      </div>
    </header>
  )
};
