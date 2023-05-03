import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';

import Link1 from '@components/Link1';
import Link2 from '@components/Link2';
import Link3 from '@components/Link3';

import { NavigationLinkProps } from '../../interfaces/interfaces';

import style from './App.scss';

interface NavigationLinkPropsExtended extends NavigationLinkProps {
  message: string;
}

const NavigationLink: React.FC<NavigationLinkPropsExtended> = ({ to, children, message }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === to;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(to, { state: { message } });
  };

  return (
    <NavLink to={to}
             onClick={handleLinkClick}
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
        <NavigationLink to="/"  message={'My message to Link1'}>[Start]</NavigationLink>
        <NavigationLink to="/1" message={'My message to Link1'}>[Link1]</NavigationLink>
        <NavigationLink to="/2" message={'My message to Link2'}>[Link2]</NavigationLink>
        <NavigationLink to="/3" message={'My message to Link3'}>[Link3]</NavigationLink>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/1" element={<Link1 />} />
        <Route path="/2" element={<Link2 />} />
        <Route path="/3" element={<Link3 />} />
      </Routes>

    </BrowserRouter>

  </div>
);
