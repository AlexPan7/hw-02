import { useState } from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo';
import BurgerButton from '../BurgerButton';
import { NavList, NavItem } from '../Nav';

const Header = () => {
  const {header} = styles;

  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={header}>
      <Logo />
      <BurgerButton onClick={toggleNav} isOpen={isOpen}/>
      <NavList isOpen={isOpen}>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/contact">Contact</NavItem>
        <NavItem link="/blog">Blog</NavItem>
      </NavList>
    </header>
  )
}

export default Header