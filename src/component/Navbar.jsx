import React, { useState } from 'react';
import style from './Navbar.module.css';


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
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar;