import React, { useState } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import { name } from '../../helpers';
import logo from '../../img/logo.png';

import { toggleOverlay } from '../lib';
import { Button } from '../utils';

import { NavbarButtons } from './NavbarButtons';
import { DropdownFollowAlong } from './DropdownFollowAlong';
import { MobileNavbar } from './MobileNavbar';

const Logo = (props: LayoutProps) => {
  return (
    <Link to={`${props.prefix}/#start`}>
      <img className="navbar-logo" src={logo} alt={name} />
    </Link>
  );
};

export const Nav = (props: LayoutProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar bg-lightest text-dark-gray sticky-top p-0">
        <div className="container flex-nowrap">
          <Logo {...props} />

          <div className="desktop-navbar">
            <DropdownFollowAlong {...props} />
            <NavbarButtons className="justify-content-end ml-2 ml-lg-4" prefix={props.prefix} />
          </div>
          <Button
            id="mobile-navbar-toggler"
            className={isOpen ? 'open' : ''}
            onClick={() => toggleOverlay(isOpen, setOpen)}
          >
            <span /> <span /> <span /> <span />
          </Button>
          <CSSTransition
            in={isOpen}
            timeout={750}
            classNames="mobile-navbar-transition"
            unmountOnExit
          >
            <MobileNavbar
              isOpen={isOpen}
              setOpen={setOpen}
              toggleOverlay={toggleOverlay}
              prefix={props.prefix}
            />
          </CSSTransition>
        </div>
      </nav>
    </>
  );
};
