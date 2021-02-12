import React, { useEffect, useRef, useState, MutableRefObject } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import { name } from '../../helpers';

import { toggleOverlay } from '../lib';
import { Button } from '../Button';

import { NavbarButtons } from './NavbarButtons';
import { DropdownFollowAlong } from './DropdownFollowAlong';
import { MobileNavbar } from './MobileNavbar';

const isLight = (props: LayoutProps) => props.location.pathname.includes('hiddenBoost');

const Logo = (props: LayoutProps) => {
  const fileName = isLight(props) ? 'logo' : 'logo-inverted';
  const logo = require(`../../img/${fileName}.png`);
  return (
    <Link to={`${props.prefix}/#start`}>
      <img className="navbar-logo" src={logo} alt={name} />
    </Link>
  );
};

const toggleNav = (navRef: MutableRefObject<HTMLElement | null>) => {
  let initialOffset = window.pageYOffset;
  document.onscroll = () => {
    const currentOffset = window.pageYOffset;
    const { current } = navRef || {};
    if (current) {
      if (initialOffset > currentOffset) {
        current.style.top = '0px';
      } else {
        current.style.top = '-70px';
      }
      initialOffset = currentOffset;
    }
  };
};

export const Nav = (props: LayoutProps) => {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef(null);
  const isLightBg = isLight(props);
  useEffect(() => {
    toggleNav(navRef);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar bg-${isLightBg ? 'lightest' : 'primary'} text-${
          isLightBg ? 'dark-gray' : 'white'
        } sticky-top p-0`}
      >
        <div className="container flex-nowrap">
          <Logo {...props} />

          <div className="desktop-navbar">
            <DropdownFollowAlong {...props} />
            <NavbarButtons
              className="justify-content-end ml-2 ml-lg-4"
              prefix={props.prefix}
              isLightBg={isLightBg}
            />
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
