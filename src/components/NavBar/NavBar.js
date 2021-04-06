import React from 'react';
import Navigation from '../Navigation/';
import s from './NavBar.module.css';

export default function NavBar() {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
}
