import style from './App.module.css';
import Navbar from './component/Navbar';
function App() {
  return (
   <>
    <Navbar/>
    <div className={style.App}>
      <h1>hello world!</h1>
      <h2>welcome to React project</h2>
    </div>
   </>
  );
}

export default App;
