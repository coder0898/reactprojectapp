import React, { useState } from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [isExpandable, setIsExpandable] = useState(false);

  return (
    <nav className={style.nav}>
        <div className={style.logo}>
            <h1>React Project App</h1>
        </div>
        <button onClick={()=> setIsExpandable(!isExpandable)} className={style.hamburger}>
        <i className="fa-solid fa-bars"></i>
        </button>
        <ul className={isExpandable ? `${style.nav_list} ${style.expand}`: style.nav_list}>
            <li><NavLink to='/reactprojectapp' style={{textDecoration:"none"}}>Home</NavLink></li>
            <li><NavLink to='/project' style={{textDecoration:"none"}}>Projects</NavLink></li>
            <li><NavLink to='/about' style={{textDecoration:"none"}}>About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar;