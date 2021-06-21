import logo from './logo.svg';
import './App.css';
import CustomComponent, {CustomCard} from './CustomComponent';

function App() {
  return (
    <div className="App">
      <CustomComponent text='This is text'>I want this text to appear on my Custom Component</CustomComponent>
      <CustomCard>This is a customized Card that I want to use</CustomCard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
