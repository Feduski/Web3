import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
      <h1 className="title">
          Hello world <span aria-label="emoji" role="img">🔥</span>
      </h1>
      <input type="text" className="new-task" size="40" placeholder="Aplicamos Estilos -> src/App.css"/>
      </div>
    </header>
  </div>
  );
}

export default App;
