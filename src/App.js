import style from './App.module.css';
import Navbar from './component/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';

function App() {
  return (
   <>
    <Navbar/>
    <div className={style.App}>
        <Routes>
          <Route path='/reactprojectapp' element={<Home/>} />
          <Route path='/project' element={ <Project/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
    </div>
   </>
  );
}

export default App;
