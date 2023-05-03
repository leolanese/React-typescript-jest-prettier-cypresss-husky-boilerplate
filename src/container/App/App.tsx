import React, { ReactNode } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

import Link1 from '@components/Link1';
import Link2 from '@components/Link2';
import Link3 from '@components/Link3';

import { NavigationLinkProps } from '../../interfaces/interfaces';

import style from './App.scss';

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLink to={to} 
             className={isActive ? 
              `${style.link} ${style.activeLink}` : 
              style.link}>
      {children}
    </NavLink>
  );
};

export const App = (): JSX.Element => (
  <div className={style.componentWrapper}>

    <h2>App.tsx</h2>

    <BrowserRouter>
    
      <nav className={style.routingWrapper}>
        <b>Routing: </b>
        <NavigationLink to="/">Link0</NavigationLink>
        <NavigationLink to="/1">Link1</NavigationLink>
        <NavigationLink to="/2">Link2</NavigationLink>
      </nav>

      <Routes>
        <Route path="/" element={<Link1 />} />
        <Route path="/1" element={<Link2 />} />
        <Route path="/2" element={<Link3 />} />
      </Routes>

    </BrowserRouter>

  </div>
);
