import React from 'react'
import style from './header.module.css';
import Comers from './subComponent/iconGroup/Comers';
import Logo from './subComponent/logo/Logo';
import Nav from './subComponent/nav/Nav';

const Header = () => {
  return (
    <div className={style.header}>
       <Logo/>
       
       <Nav/>
       <Comers/>
       

    </div>
  )
}

export default Header