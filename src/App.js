import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";
import {initGA, logEvent, logPageView} from "./analytics";

function App() {
  useEffect(() => {
    initGA();
    logPageView(); // Відстежуємо перегляд сторінок
  }, []);

  const logTestEvent = () => {
    console.log('event logged')
    logEvent('User Interaction', 'Clicked on Signup Button', 'Signup Page');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={logTestEvent}>Log my test event</button>
      </header>
    </div>
  );
}

export default App;
