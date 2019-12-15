import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


let data = {
  balance: -369
}

function App() {
  const [balance, setBalance] = useState(data.balance);
  // setInterval(()=>{
  //   setBalance(balance + 1);
  //   console.log(balance);
  // }, 1000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          your balance is { balance }
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
