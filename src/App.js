import logo from './img/Scarecrow.png'; 
import './index.css';

function App() {

  return (

  <div className="App">
  
  <header>
    <h2>404 NOT FOUND</h2>
  </header>
  
  <body>
    <img src={logo} />

    <h1>I have bad news for you</h1>

    <p>The page you are looking for might be removed or is temporarily unavailable</p>

    <button>Back to homepage</button>
  </body>
    
  <footer>
    <h3>created by Lindow (Anthony Casares) - devChallenges.io</h3>
  </footer>

  </div>

  );
}

export default App;

