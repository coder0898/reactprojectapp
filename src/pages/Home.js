import React from 'react';
import { Link } from 'react-router-dom';
import style from './Pages.module.css';

const Home = () => {
  return (
    <div className={style.home_container}>
       <div className={style.home_img}>
      <i className="fa-brands fa-react"></i>
      </div>
      <div className={style.home_desc}>
         <h2>React Project App</h2>
         <p>Place to find all react based Web Application project.Starting from small to large clone application.</p>
         <button>
         <Link to='/project' style={{textDecoration:"none"}}>See All Project Here!</Link>
         </button>
      </div>
    </div>
  )
}

export default Home;