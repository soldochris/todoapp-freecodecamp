import './App.css';
import logo from './images/logo-large.png';
import Task  from './components/Task';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={logo}
          className='inspiredCode-logo'
          alt='Logo Inspired-Code'
        />
      </div>
      <div className='main-task-list'>
        <h1>My Tasks</h1>
        <Task text='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
