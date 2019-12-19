import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';



function App() {
  const [balance, setBalance] = useState({balance: 255});
  useEffect(() => {
    async function fetchData () {
      const result = await axios(
        'https://axuw2l7p16.execute-api.us-east-2.amazonaws.com/dev',
      );
      console.log("result", result);
      setBalance(result.data);
    };
    fetchData();
  }, []);
  // setInterval(()=>{
  //   setBalance(balance + 1);
  //   console.log(balance);
  // }, 1000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          your balance is { balance.balance }
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
